<script>
  import getTrackedState from './store';

  const state = getTrackedState();
</script>

<div>
  <div>
    <span>Count: {`${$state.count} (${Date.now()})`}</span>
    <button on:click={() => state.dispatch({ type: 'increment' })}>+1</button>
    <button on:click={() => state.dispatch({ type: 'decrement' })}>-1</button>
  </div>
</div>
