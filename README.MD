# React Hooks Light
Minimal [React](https://reactjs.org) hooks library

# Installation
```bash
npm install react-hooks-light
```
or
```bash
yarn add react-hooks-light
```

# Hooks

* [`useOutside`](#useOutside)
* [`usePrevious`](#usePrevious)
* [`useTick`](#useTick)
* [`useHover`](#useHover)
* [`useWindowResize`](#useWindowResize)
# <a name="useOutside"></a>useOutside
Mouse event click outside of the element
## Usage
```jsx
useOutside({
  ref: wrapperRef,
  isActive,
  onOutClick: () => {}
})
```
## Parameters
|Parameter   |Type       |Description               |Required|
|------------|-----------|--------------------------|--------|
|`ref`       | ReactRef  | Wrapper element ref      | True   |
|`isActive`  | Bool      | Active status            | True   |
|`onOutClick`| Func      | Event out click callback | True   |
## Example
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
        <ul style={{
          position: 'absolute',
          left: 0,
          right: 0,
          padding: 20,
          background: '#ccc'
        }}>
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
      )}
    </div>
  );
};
```
# <a name="usePrevious"></a>usePrevious
Save previous state or props (Primitive or Object values)
## Usage
```jsx
const prevValue = usePrevious({value: 1});
```
## Parameters
|Parameter   |Type       |Description               |Required     |
|------------|-----------|--------------------------|-------------|
|`Any`       | Primitive or Object  | Primitive or Object| True   |
## Return
First render return `undefined`, next render return `previous` value
## Example
```jsx
import React, {useRef, useState} from 'react';
import {usePrevious} from 'react-hooks-light';

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
# <a name="useTick"></a>useTick
Return tick cooldown. You can use this hook, if you need live update fetch API

## Usage
```jsx
  const {timestamp, tick} = useTick({
    isActive: true,
    msDelay: 1000,
    count: 10
  });
```
## Parameters
|Parameter   |Type       |Description               |Required|
|------------|-----------|--------------------------|--------|
|`isActive`  | Bool      | Activate tick            |True    |
|`msDelay`   | Number    | Microseconds tick delay  |True    |
|`count`     | Number    | Start cooldown tick      |True    |
## Return
|Parameter   |Type       |Description               |
|------------|-----------|--------------------------|
|`timestamp` | String    | Next unix timestamp, after count equal 0|
|`tick`      | Number    | Next cooldown tick in each msDelay      |
## Example
```jsx
import React from 'react';
import {useTick} from 'react-hooks-light';

export const TickExample = () => {
  const {timestamp, tick} = useTick({
    isActive: true,
    msDelay: 1000,
    count: 10
  });

  return (
    <>
      <h3>Tick cooldown</h3>
      <p>Tick: {tick}</p>
      <h3>Autoupdate</h3>
      <p>
        Fetch data from API, after tick equal 0, has next timestamp<br/>
        <u>/api/subject?live={timestamp}</u>
      </p>
    </>
  );
};

export default TickExample;
```
# <a name="useHover"></a>useHover
Using events: mouseout & mouseover, return hover state

## Usage
```jsx
  const {isHover, onMouseOver, onMouseOut} = useHover();
```
## Return
|Parameter   |Type       |Description               |
|------------|-----------|--------------------------|
|`isHover`     | Bool    | Hover active status      |
|`onMouseOver` | Func    | onMouseOver React event  |
|`onMouseOut`  | Func    | onMouseOut React event   |
## Example
```jsx
import React from 'react';
import {useHover} from 'react-hooks-light';

export const HoverExample = () => {
  const {isHover, onMouseOver, onMouseOut} = useHover();

  return (
    <div style={{background: isHover ? '#ddd' : '#eee', padding: 5}}>
      <p
        style={{background: '#fff', padding: 10}}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
      >
        Hover me!
      </p>
    </div>
  );
};

export default HoverExample;
```
# <a name="useWindowResize"></a>useWindowResize
Using events: resize, return window document size

## Usage
```jsx
  const documentSize = useWindowResize();
```
or
```jsx
  useWindowResize({onResize: callbackHandler});
```
or
```jsx
  const documentSize = useWindowResize({onResize: callbackHandler});
```
## Parameters
|Parameter   |Type       |Description                          |Required|
|------------|-----------|-------------------------------------|--------|
|`onResize`  | Func      | Handler called after resize event   |False   |
## Return
|Parameter   |Type       |Description                 |
|------------|-----------|----------------------------|
|`documentSize`| Object    | Document width and height  |
## Example
```jsx
import React, {useState} from 'react';
import {useWindowResize} from 'react-hooks-light';

export const WindowResizeExample = () => {
  const [counter, setCounter] = useState(0);

  const resizeHandler = () => {
    setCounter(counter + 1);
  };

  const documentSize = useWindowResize({onResize: resizeHandler});

  return (
    <div>
      document, widht {documentSize.width}, height: {documentSize.height}
      <br/>
      counter resize event: {counter}
    </div>
  );
};

export default WindowResizeExample;
```

###
