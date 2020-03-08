import { Action as BaseAction, Store } from 'redux';
import { readable } from 'svelte/store';

import { createDeepProxy, isDeepChanged } from 'proxy-compare';

/**
 * Take Redux store and return a global state for Svelte.
 * With state usage tracking.
 * @example
 * import { createStore } from 'redux';
 * import { bindTracked } from 'svelte3-redux';
 *
 * const store = createStore(reducer);
 * export default () => bindTracked(store);
 */
export const bindTracked = <State, Action extends BaseAction>(store: Store<State, Action>) => {
  const proxyCache = new WeakMap();
  let lastTracked: {
    state: State;
    affected: WeakMap<object, Set<string | number | symbol>>;
    cache: WeakMap<object, unknown>;
  };
  const wrapState = (state: State) => {
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
