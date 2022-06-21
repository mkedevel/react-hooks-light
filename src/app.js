import React from 'react';
import ReactDOM from 'react-dom';

import PreviousExample from './example/previous-example.tsx';
import OutsideExample from './example/outside-example.tsx';
import HoverExample from './example/hover-example.tsx';
import TickExample from './example/tick-example.tsx';

const startApp = () => {
  ReactDOM.render(
    <div>
      <h1>Examples</h1>
      <ul style={{
        listStyle: 'decimal'
      }}
      >
        <li>
          <h2>Previous Example</h2>
          <PreviousExample/>
          <hr/>
        </li>
        <li>
          <h2>Outside Example</h2>
          <OutsideExample/>
          <hr/>
        </li>
        <li>
          <h2>Hover Example</h2>
          <HoverExample/>
          <hr/>
        </li>
        <li>
          <h2>Tick Example</h2>
          <TickExample/>
        </li>
      </ul>
    </div>,
    document.getElementById('root')
  );
};

startApp();
