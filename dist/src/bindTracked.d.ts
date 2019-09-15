import { Action, Store } from 'redux';
/**
 * Take Redux store and return a global state for Svelte.
 * With state usage tracking.
 * @example
 * import { createStore } from 'redux';
 * import { bindTracked } from 'svelte3-redux';
 * const store = createStore(reducer);
 * export default () => bindTracked(store);
 */
export declare const bindTracked: <S, A extends Action<any>>(store: Store<S, A>) => {
    subscribe: (run: (value: any) => void, invalidate?: ((value?: any) => void) | undefined) => () => void;
    dispatch: import("redux").Dispatch<A>;
};
