import { Action as BaseAction, Store } from 'redux';
/**
 * Take Redux store and return a global state for Svelte.
 * @example
 * import { createStore } from 'redux';
 * import { bind } from 'svelte3-redux';
 *
 * const store = createStore(reducer);
 * export default bind(store);
 */
export declare const bind: <State, Action extends BaseAction<any>>(store: Store<State, Action>) => {
    subscribe: (run: (value: State) => void, invalidate?: ((value?: State | undefined) => void) | undefined) => () => void;
    dispatch: import("redux").Dispatch<Action>;
};
