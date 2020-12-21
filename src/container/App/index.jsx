import React, { useEffect, useState } from 'react';
import {
  Switch,
  Route,
  useParams
  // useHistory
} from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { useTranslation } from 'react-i18next';

// import { changeLanguage } from '../../redux/modules/language/actions';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Nav from '../../components/Nav';
import SmoothScroll from '../SmoothScroll';
import BottomNav from '../../components/BottomNav';

export default () => {
  // const dispatch = useDispatch();
  const { lang } = useParams();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [classCursor] = useState('');
  const [cursorHidden, setCursorHidden] = useState(true);
  // const [lang, setLang] = useState();
  // const language = localStorage.getItem('language');
  // const { t, i18n } = useTranslation();
  // const hist+ory = useHistory();
  const onMouseMove = (e) => {
    setCursorHidden(false);
    setPosition({ x: e.clientX, y: e.clientY });
  };
  const onMouseLeave = () => {
    setCursorHidden(true);
  };
  const addEventListeners = () => {
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
  };
  // const removeEventListeners = () => {
  //   document.removeEventListener('mousemove', onMouseMove);
  //   document.removeEventListener(
  //     'mouseleave',
  //     onMouseLeave
  //   );
  // };
  useEffect(() => {
    // if (!language) {
    //   dispatch(changeLanguage('ru'));
    // }
    // let value;
    // if (lang === 'ru' || lang === 'en' || lang === 'uz') {
    //   value = lang;
    // } else {
    //   value = localStorage.getItem('language');
    // }
    // console.log(lang);
    // dispatch(changeLanguage(value));
    // i18n.changeLanguage(value);
    // document.title = t('titleTop');
    addEventListeners();
    // return () => removeEventListeners();
  }, []);

  return (
    <>
      <Nav />
      <BottomNav />
      {cursorHidden ? null : (
        <div>
          <div
            className={`mouse ${classCursor}`}
            style={{
              left: `${position.x}px`,
              top: `${position.y}px`
            }}
          >
            <span className="icon-hover iconx-instagram">
              <i className="fab fa-instagram" />
            </span>
          </div>
          <div
            className="cursor"
            style={{
              left: `${position.x}px`,
              top: `${position.y}px`
            }}
          />
        </div>
      )}
      <SmoothScroll>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route
            path={`/:${lang}/about`}
            component={About}
          />
          <Route path={`/:${lang}/category`} />
          <Route path={`/:${lang}/search`} />
          <Route path={`/:${lang}/news/:id`} />

          <Route path="*">
            <b>404</b>
            <p>Not found</p>
          </Route>
        </Switch>
      </SmoothScroll>
    </>
  );
};
