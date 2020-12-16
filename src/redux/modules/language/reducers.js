import types from '../../../constants/action-types';

const initialState = {
  language: localStorage.getItem('language') || 'uz'
};

const map = {
  [types.CHANGE_LANGUAGE]: (state, { value }) => {
    localStorage.setItem('language', value);
    return { ...state, language: value };
  }
};

// eslint-disable-next-line max-len
export default (state = initialState, action) => (map[action.type] && map[action.type](state, action)) || state;
