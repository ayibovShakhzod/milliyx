import axios, { execute } from '.';

export default {
  getSlider: (id) => execute(axios.get(`/slider/${id}`))
};
