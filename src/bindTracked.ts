import { Action, Store } from 'redux';
import { readable } from 'svelte/store';

import { createDeepProxy, isDeepChanged } from './deepProxy';

/**
 * Take Redux store and return a global state for Svelte.
 * With state usage tracking.
 * @example
 * import { createStore } from 'redux';
 * import { bindTracked } from 'svelte3-redux';
 * const store = createStore(reducer);
 * export default () => bindTracked(store);
 */
export const bindTracked = <S, A extends Action>(store: Store<S, A>) => {
  const proxyCache = new WeakMap();
  let lastTracked: {
    state: S;
    affected: WeakMap<object, unknown>;
    cache: WeakMap<object, unknown>;
  };
  const wrapState = (state: S) => {
    const affected = new WeakMap();
    const wrapped = createDeepProxy(state, affected, proxyCache);
    lastTracked = {
      state,
      affected,
      cache: new WeakMap(),
    };
    return wrapped;
  };
  const initialState = wrapState(store.getState());
  const { subscribe } = readable(initialState, (set) => {
    const unsubscribe = store.subscribe(() => {
      const nextState = store.getState();
      if (lastTracked.state === nextState
        || !isDeepChanged(
          lastTracked.state,
          nextState,
          lastTracked.affected,
          lastTracked.cache,
        )) {
        // not changed
        return;
      }
      set(wrapState(nextState));
    });
    return unsubscribe;
  });
  return {
    subscribe,
    dispatch: store.dispatch,
  };
};
