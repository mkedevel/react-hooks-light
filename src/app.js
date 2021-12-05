import React from 'react';
import ReactDOM from 'react-dom';

import PreviousExample from './example/previous-example.jsx';
import OutsideExample from './example/outside-example.jsx';

const startApp = () => {
  ReactDOM.render(
    <>
      <PreviousExample/>
      <OutsideExample/>
    </>,
    document.getElementById('root')
  );
};

startApp();
