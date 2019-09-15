<script>
import { createStore } from 'redux';
import { bind } from 'svelte3-redux';

const initialState = {
  count: 0,
  text: 'hello',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'increment': return { ...state, count: state.count + 1 };
    case 'decrement': return { ...state, count: state.count - 1 };
    case 'setText': return { ...state, text: action.text };
    default: return state;
  }
};

const store = createStore(reducer);
const state = bind(store);
</script>

<h1>Counter</h1>
<div>
  <div>
    <span>Count: {$state.count}</span>
    <button on:click={() => state.dispatch({ type: 'increment' })}>+1</button>
    <button on:click={() => state.dispatch({ type: 'decrement' })}>-1</button>
  </div>
</div>
 
<h1>TextBox</h1>
<div>
  <div>
    <span>Text: {$state.text}</span>
    <input value={$state.text} on:input={event => state.dispatch({ type: 'setText', text: event.target.value })} />
  </div>
</div>
