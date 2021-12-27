import React from 'react';
import useHover from '../use-hover/use-hover.jsx';

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
