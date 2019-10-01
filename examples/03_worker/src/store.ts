import { wrapStore } from 'redux-in-worker';
import { bindTracked } from 'svelte3-redux';

import { initialState } from './store.worker';

const store = wrapStore(
  new Worker('./store.worker', { type: 'module' }),
  initialState,
);


export default () => bindTracked(store);
