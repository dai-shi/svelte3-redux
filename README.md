# svelte3-redux

[![Build Status](https://travis-ci.com/dai-shi/svelte3-redux.svg?branch=master)](https://travis-ci.com/dai-shi/svelte3-redux)
[![npm version](https://badge.fury.io/js/svelte3-redux.svg)](https://badge.fury.io/js/svelte3-redux)
[![bundle size](https://badgen.net/bundlephobia/minzip/svelte3-redux)](https://bundlephobia.com/result?p=svelte3-redux)

Redux for Svelte 3

## Introduction

This is an experimental project to combine Redux and Svelte3.
It provides the same state usage tracking support
in [reactive-react-redux](https://github.com/dai-shi/reactive-react-redux).

## Install

```bash
npm install svelte3-redux
```

## Usage (bind)

This is simple usage.
Reactivity works for all components.

```html
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
```

## Usage (bindTracked)

This is recommended usage.
Reactivity works based on state usage tracking.

### store.js

```javascript
import { createStore } from 'redux';
import { bindTracked } from 'svelte3-redux';

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
export default () => bindTracked(store);
```

### Counter.svelte

```html
<script>
  import getTrackedState from './store';

  const state = getTrackedState();
</script>

<h1>Counter</h1>
<div>
  <div>
    <span>Count: {$state.count}</span>
    <button on:click={() => state.dispatch({ type: 'increment' })}>+1</button>
    <button on:click={() => state.dispatch({ type: 'decrement' })}>-1</button>
  </div>
</div>
```

### TextBox.svelte

```html
<script>
  import getTrackedState from './store';

  const state = getTrackedState();
</script>

<h1>TextBox</h1>
<div>
  <div>
    <span>Text: {$state.text}</span>
    <input value={$state.text} on:input={event => state.dispatch({ type: 'setText', text: event.target.value })} />
  </div>
</div>
```

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### bind

Take Redux store and return a global state for Svelte.

#### Parameters

-   `store` **Store&lt;State, Action>** 

#### Examples

```javascript
import { createStore } from 'redux';
import { bind } from 'svelte3-redux';

const store = createStore(reducer);
export default bind(store);
```

### bindTracked

Take Redux store and return a global state for Svelte.
With state usage tracking.

#### Parameters

-   `store` **Store&lt;State, Action>** 

#### Examples

```javascript
import { createStore } from 'redux';
import { bindTracked } from 'svelte3-redux';

const store = createStore(reducer);
export default () => bindTracked(store);
```

## Examples

The [examples](examples) folder contains working examples.
You can run one of them with

```bash
PORT=8080 npm run examples:01_minimal
```

and open <http://localhost:8080> in your web browser.
