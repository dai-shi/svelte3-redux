import { Action, Store } from 'redux';
import { readable } from 'svelte/store';

/**
 * Take Redux store and return a global state for Svelte.
 * @example
 * import { createStore } from 'redux';
 * import { bind } from 'svelte3-redux';
 * const store = createStore(reducer);
 * export default bind(store);
 */
export const bind = <S, A extends Action>(store: Store<S, A>) => {
  const state = readable(store.getState(), (set) => {
    const unsubscribe = store.subscribe(() => {
      set(store.getState());
    });
    return unsubscribe;
  });
  return {
    subscribe: state.subscribe,
    dispatch: store.dispatch,
  };
};
