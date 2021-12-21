## React Hooks Light
Minimal [React](https://reactjs.org) hooks library

## Installation
```bash
npm install react-hooks-light
yarn install react-hooks-light
```

## How to use
### `useOutside` - mouse event click outside of the element
```jsx
import React, {useRef, useState} from 'react';
import {useOutside} from 'react-hooks-light';

const OutsideExample = () => {
  const wrapperRef = useRef();
  const [isActive, setActive] = useState(false);

  useOutside({
    ref: wrapperRef,
    isActive,
    onOutClick: () => setActive(false)
  });

  return (
    <div
      ref={wrapperRef}
      style={{position: 'relative'}}
    >
      <button
        type="button"
        onClick={() => setActive(true)}
      >
        click!
      </button>
      {isActive && (
        <ul style={{position: 'absolute', left: 0, right: 0, padding: 20, background: '#ccc'}}>
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
      )}
    </div>
  );
};
```
### `usePrevious` - save previous state or props
```jsx
import React, {useRef, useState} from 'react';
import {useOutside} from 'react-hooks-light';

const PreviousExample = () => {
  const [value, setValue] = useState(1);
  const prevValue = usePrevious(value);

  return (
    <div>
      <button
        type="button"
        onClick={() => setValue(value + 1)}
      >
        click!
      </button>
      <br/>
      <br/>
      <span>Prev: {prevValue}</span>
      <br/>
      <span>Current:  {value}</span>
    </div>
  );
};
```
