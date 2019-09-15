import { Action, Store } from 'redux';
/**
 * Take Redux store and return a global state for Svelte.
 * @example
 * import { createStore } from 'redux';
 * import { bind } from 'svelte3-redux';
 * const store = createStore(reducer);
 * export default bind(store);
 */
export declare const bind: <S, A extends Action<any>>(store: Store<S, A>) => {
    subscribe: (run: (value: S) => void, invalidate?: ((value?: S | undefined) => void) | undefined) => () => void;
    dispatch: import("redux").Dispatch<A>;
};
