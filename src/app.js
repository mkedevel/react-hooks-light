import React from 'react';
import ReactDOM from 'react-dom';

import PreviousExample from './example/previous-example';
import OutsideExample from './example/outside-example';
import HoverExample from './example/hover-example';
import TickExample from './example/tick-example';
import WindowResizeExample from './example/window-resize-example';

const startApp = () => {
  ReactDOM.render(
    <div>
      <h1>ReactHooksLight Examples</h1>
      <ul style={{
        listStyle: 'decimal'
      }}
      >
        <li>
          <h2>usePrevious</h2>
          <PreviousExample/>
          <hr/>
        </li>
        <li>
          <h2>useOutside</h2>
          <OutsideExample/>
          <hr/>
        </li>
        <li>
          <h2>useHover</h2>
          <HoverExample/>
          <hr/>
        </li>
        <li>
          <h2>useTick</h2>
          <TickExample/>
        </li>
        <li>
          <h2>useWindowResize</h2>
          <WindowResizeExample/>
        </li>
      </ul>
    </div>,
    document.getElementById('root')
  );
};

startApp();
