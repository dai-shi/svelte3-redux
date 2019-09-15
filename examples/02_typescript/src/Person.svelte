<script>
  import getTrackedState from './store';

  const state = getTrackedState();
</script>

<div>
  <div>
    First Name:
    {`${$state.person.firstName} (${Date.now()})`}
    <input
      value={$state.person.firstName}
      on:keyup={(event) => {
        const firstName = event.target.value;
        state.dispatch({ firstName, type: 'setFirstName' });
      }}
    />
  </div>
  <div>
    Last Name:
    {`${$state.person.lastName} (${Date.now()})`}
    <input
      value={$state.person.lastName}
      on:keyup={(event) => {
        const lastName = event.target.value;
        state.dispatch({ lastName, type: 'setLastName' });
      }}
    />
  </div>
  <div>
    Age:
    {`${$state.person.age} (${Date.now()})`}
    <input
      value={$state.person.age}
      on:keyup={(event) => {
        const age = Number(event.target.value) || 0;
        state.dispatch({ age, type: 'setAge' });
      }}
    />
  </div>
</div>
