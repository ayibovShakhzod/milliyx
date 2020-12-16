import { slider1 } from '../data/slider';

export default (mock) => {
  mock.onGet('/slider/1').reply(200, slider1);
};
