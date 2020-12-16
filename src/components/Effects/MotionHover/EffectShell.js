/* eslint-disable */
import * as THREE from 'three';
import { TweenLite, Power4 } from 'gsap';

Number.prototype.map = function (
  in_min,
  in_max,
  out_min,
  out_max
) {
  return (
    ((this - in_min) * (out_max - out_min)) /
      (in_max - in_min) +
    out_min
  );
};
class EffectShell {
  constructor(
    container = document.body,
    itemsWrapper = null
  ) {
    this.container = container;
    this.itemsWrapper = itemsWrapper;
    if (!this.container || !this.itemsWrapper) return;
    this.setup();
    this.initEffectShell().then(() => {
      console.log('load finished');
      this.isLoaded = true;
      if (this.isMouseOver)
        this.onMouseOver(this.tempItemIndex);
      this.tempItemIndex = null;
    });
    this.createEventsListeners();
  }

  setup() {
    window.addEventListener(
      'resize',
      this.onWindowResize.bind(this),
      false
    );

    // renderer
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    });
    this.renderer.setSize(
      this.viewport.width,
      this.viewport.height
    );
    // this.renderer.setClearColor( 0xFFFFFF, 0 );
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.container.appendChild(this.renderer.domElement);

    // scene
    this.scene = new THREE.Scene();
    // this.scene.background = new THREE.Color( 0xFFFFFF, 0 );
    // camera
    this.camera = new THREE.PerspectiveCamera(
      40,
      this.viewport.aspectRatio,
      0.1,
      100
    );
    this.camera.position.set(0, 0, 3);

    //mouse
    this.mouse = new THREE.Vector2();

    // console.log(this.viewSize)
    // let pg = new THREE.PlaneBufferGeometry(
    //   this.viewSize.width,
    //   this.viewSize.height,
    //   1,
    //   1
    // )
    // let pm = new THREE.MeshBasicMaterial({ color: 0xff0000 })
    // let mm = new THREE.Mesh(pg, pm)
    // this.scene.add(mm)

    // time
    this.timeSpeed = 2;
    this.time = 0;
    this.clock = new THREE.Clock();

    // animation loop
    this.renderer.setAnimationLoop(this.render.bind(this));
  }

  render() {
    // called every frame
    this.time += this.clock.getDelta() * this.timeSpeed;
    this.renderer.render(this.scene, this.camera);
  }

  initEffectShell() {
    let promises = [];

    this.items = this.itemsElements;

    const THREEtextureLoader = new THREE.TextureLoader();
    this.items.forEach((item, index) => {
      // create textures
      promises.push(
        this.loadTexture(
          THREEtextureLoader,
          item.img ? item.img.src : null,
          index
        )
      );
    });

    return new Promise((resolve, reject) => {
      // resolve textures promises
      Promise.all(promises).then((promises) => {
        // all textures are loaded
        promises.forEach((promise, index) => {
          // assign texture to item
          this.items[index].texture = promise.texture;
        });
        resolve();
      });
    });
  }

  createEventsListeners() {
    this.items.forEach((item, index) => {
      item.element.addEventListener(
        'mouseover',
        this._onMouseOver.bind(this, index),
        false
      );
    });

    this.container.addEventListener(
      'mousemove',
      this._onMouseMove.bind(this),
      false
    );
    this.itemsWrapper.addEventListener(
      'mouseleave',
      this._onMouseLeave.bind(this),
      false
    );
  }

  _onMouseLeave(event) {
    this.isMouseOver = false;
    this.onMouseLeave(event);
  }

  _onMouseMove(event) {
    // get normalized mouse position on viewport
    this.mouse.x =
      (event.clientX / this.viewport.width) * 2 - 1;
    this.mouse.y =
      -(event.clientY / this.viewport.height) * 2 + 1;

    this.onMouseMove(event);
  }

  _onMouseOver(index, event) {
    this.tempItemIndex = index;
    this.onMouseOver(index, event);
  }

  onWindowResize() {
    this.camera.aspect = this.viewport.aspectRatio;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(
      this.viewport.width,
      this.viewport.height
    );
  }

  onUpdate() {}

  onMouseEnter(event) {}

  onMouseLeave(event) {}

  onMouseMove(event) {}

  onMouseOver(index, event) {}

  get viewport() {
    let width = this.container.clientWidth;
    let height = this.container.clientHeight;
    let aspectRatio = width / height;
    return {
      width,
      height,
      aspectRatio
    };
  }

  get viewSize() {
    // fit plane to screen
    // https://gist.github.com/ayamflow/96a1f554c3f88eef2f9d0024fc42940f

    let distance = this.camera.position.z;
    let vFov = (this.camera.fov * Math.PI) / 180;
    let height = 2 * Math.tan(vFov / 2) * distance;
    let width = height * this.viewport.aspectRatio;
    return { width, height, vFov };
  }

  get itemsElements() {
    // convert NodeList to Array
    const items = [
      ...this.itemsWrapper.querySelectorAll('.link')
    ];

    //create Array of items including element, image and index
    return items.map((item, index) => ({
      element: item,
      img: item.querySelector('img') || null,
      index: index
    }));
  }

  loadTexture(loader, url, index) {
    // https://threejs.org/docs/#api/en/loaders/TextureLoader
    return new Promise((resolve, reject) => {
      if (!url) {
        resolve({ texture: null, index });
        return;
      }
      // load a resource
      loader.load(
        // resource URL
        url,

        // onLoad callback
        (texture) => {
          resolve({ texture, index });
        },

        // onProgress callback currently not supported
        undefined,

        // onError callback
        (error) => {
          console.error('An error happened.', error);
          reject(error);
        }
      );
    });
  }
}

class StretchEffect extends EffectShell {
  constructor(
    container = document.body,
    itemsWrapper = null,
    options = {}
  ) {
    super(container, itemsWrapper);
    if (!this.container || !this.itemsWrapper) return;

    options.strength = options.strength || 0.25;
    this.options = options;

    this.init();
  }

  init() {
    this.position = new THREE.Vector3(0, 0, 0);
    this.scale = new THREE.Vector3(1, 1, 1);
    this.geometry = new THREE.PlaneBufferGeometry(
      1,
      1,
      32,
      32
    );
    this.uniforms = {
      uTexture: {
        value: null
      },
      uOffset: {
        value: new THREE.Vector2(0.0, 0.0)
      },
      uAlpha: {
        value: 0
      }
    };
    this.material = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: `
            uniform vec2 uOffset;
    
            varying vec2 vUv;
    
            vec3 deformationCurve(vec3 position, vec2 uv, vec2 offset) {
              float M_PI = 3.1415926535897932384626433832795;
              position.x = position.x + (sin(uv.y * M_PI) * offset.x);
              position.y = position.y + (sin(uv.x * M_PI) * offset.y);
              return position;
            }
    
            void main() {
              vUv =  uv + (uOffset * 2.);
              vec3 newPosition = position;
              newPosition = deformationCurve(position,uv,uOffset);
              gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );
            }
          `,
      fragmentShader: `
            uniform sampler2D uTexture;
            uniform float uAlpha;
    
            varying vec2 vUv;
    
            vec2 scaleUV(vec2 uv,float scale) {
              float center = 0.5;
              return ((uv - center) * scale) + center;
            }
    
            void main() {
              vec3 color = texture2D(uTexture,scaleUV(vUv,0.8)).rgb;
              gl_FragColor = vec4(color,uAlpha);
            }
          `,
      transparent: true
    });
    this.plane = new THREE.Mesh(
      this.geometry,
      this.material
    );
    this.scene.add(this.plane);
  }

  onMouseEnter() {
    if (!this.currentItem || !this.isMouseOver) {
      this.isMouseOver = true;
      // show plane
      TweenLite.to(this.uniforms.uAlpha, 0.5, {
        value: 1,
        ease: Power4.easeOut
      });
    }
  }

  onMouseLeave(event) {
    TweenLite.to(this.uniforms.uAlpha, 0.5, {
      value: 0,
      ease: Power4.easeOut
    });
  }

  onMouseMove(event) {
    // project mouse position to world coodinates
    let x = this.mouse.x.map(
      -1,
      1,
      -this.viewSize.width / 2,
      this.viewSize.width / 2
    );
    let y = this.mouse.y.map(
      -1,
      1,
      -this.viewSize.height / 2,
      this.viewSize.height / 2
    );

    // update position
    this.position = new THREE.Vector3(x, y, 0);
    TweenLite.to(this.plane.position, 1, {
      x: x,
      y: y,
      ease: Power4.easeOut,
      onUpdate: this.onPositionUpdate.bind(this)
    });
  }

  onPositionUpdate() {
    // compute offset
    let offset = this.plane.position
      .clone()
      .sub(this.position)
      .multiplyScalar(-this.options.strength);
    this.uniforms.uOffset.value = offset;
  }

  onMouseOver(index, e) {
    if (!this.isLoaded) return;
    this.onMouseEnter();
    if (
      this.currentItem &&
      this.currentItem.index === index
    )
      return;
    this.onTargetChange(index);
  }

  onTargetChange(index) {
    // item target changed
    this.currentItem = this.items[index];
    if (!this.currentItem.texture) return;

    // compute image ratio
    let imageRatio =
      this.currentItem.img.naturalWidth /
      this.currentItem.img.naturalHeight;
    this.scale = new THREE.Vector3(imageRatio, 1, 1);
    this.uniforms.uTexture.value = this.currentItem.texture;
    this.plane.scale.copy(this.scale);
  }
}

class RGBShiftEffect extends EffectShell {
  constructor(
    container = document.body,
    itemsWrapper = null,
    options = {}
  ) {
    super(container, itemsWrapper);
    if (!this.container || !this.itemsWrapper) return;

    options.strength = options.strength || 0.25;
    this.options = options;

    this.init();
  }

  init() {
    this.position = new THREE.Vector3(0, 0, 0);
    this.scale = new THREE.Vector3(1, 1, 1);
    this.geometry = new THREE.PlaneBufferGeometry(
      1,
      1,
      32,
      32
    );
    this.uniforms = {
      uTime: {
        value: 0
      },
      uTexture: {
        value: null
      },
      uOffset: {
        value: new THREE.Vector2(0.0, 0.0)
      },
      uAlpha: {
        value: 0
      }
    };
    this.material = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: `
        uniform vec2 uOffset;

        varying vec2 vUv;

        vec3 deformationCurve(vec3 position, vec2 uv, vec2 offset) {
          float M_PI = 3.1415926535897932384626433832795;
          position.x = position.x + (sin(uv.y * M_PI) * offset.x);
          position.y = position.y + (sin(uv.x * M_PI) * offset.y);
          return position;
        }

        void main() {
          vUv = uv;
          vec3 newPosition = position;
          newPosition = deformationCurve(position,uv,uOffset);
          gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );
        }
      `,
      fragmentShader: `
        uniform sampler2D uTexture;
        uniform float uAlpha;
        uniform vec2 uOffset;

        varying vec2 vUv;

        vec3 rgbShift(sampler2D texture, vec2 uv, vec2 offset) {
          float r = texture2D(uTexture,vUv + uOffset).r;
          vec2 gb = texture2D(uTexture,vUv).gb;
          return vec3(r,gb);
        }

        void main() {
          vec3 color = rgbShift(uTexture,vUv,uOffset);
          gl_FragColor = vec4(color,uAlpha);
        }
      `,
      transparent: true
    });
    this.plane = new THREE.Mesh(
      this.geometry,
      this.material
    );
    this.scene.add(this.plane);
  }

  onMouseEnter() {
    if (!this.currentItem || !this.isMouseOver) {
      this.isMouseOver = true;
      // show plane
      TweenLite.to(this.uniforms.uAlpha, 0.5, {
        value: 1,
        ease: Power4.easeOut
      });
    }
  }

  onMouseLeave(event) {
    TweenLite.to(this.uniforms.uAlpha, 0.5, {
      value: 0,
      ease: Power4.easeOut
    });
  }

  onMouseMove(event) {
    // project mouse position to world coodinates
    let x = this.mouse.x.map(
      -1,
      1,
      -this.viewSize.width / 2,
      this.viewSize.width / 2
    );
    let y = this.mouse.y.map(
      -1,
      1,
      -this.viewSize.height / 2,
      this.viewSize.height / 2
    );

    this.position = new THREE.Vector3(x, y, 0);
    TweenLite.to(this.plane.position, 1, {
      x: x,
      y: y,
      ease: Power4.easeOut,
      onUpdate: this.onPositionUpdate.bind(this)
    });
  }

  onPositionUpdate() {
    // compute offset
    let offset = this.plane.position
      .clone()
      .sub(this.position)
      .multiplyScalar(-this.options.strength);
    this.uniforms.uOffset.value = offset;
  }

  onMouseOver(index, e) {
    if (!this.isLoaded) return;
    this.onMouseEnter();
    if (
      this.currentItem &&
      this.currentItem.index === index
    )
      return;
    this.onTargetChange(index);
  }

  onTargetChange(index) {
    // item target changed
    this.currentItem = this.items[index];
    if (!this.currentItem.texture) return;

    // compute image ratio
    let imageRatio =
      this.currentItem.img.naturalWidth /
      this.currentItem.img.naturalHeight;
    this.scale = new THREE.Vector3(imageRatio, 1, 1);
    this.uniforms.uTexture.value = this.currentItem.texture;
    this.plane.scale.copy(this.scale);
  }
}

export default RGBShiftEffect;
