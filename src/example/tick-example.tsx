import React from 'react';
import useTick from '../use-tick/use-tick';

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
