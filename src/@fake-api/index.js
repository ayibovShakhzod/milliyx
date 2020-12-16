import MockAdapter from 'axios-mock-adapter';
import axios from '../services';
import slider from './slider';

const delayResponse = process.env.REACT_APP_MOCKAPI_DELAY || 100;

const mock = new MockAdapter(axios, { delayResponse });
slider(mock);
