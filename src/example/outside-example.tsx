import React, {useRef, useState} from 'react';
import useOutside from '../use-outside/use-outside';

export const OutsideExample = () => {
  const wrapperRef: React.RefObject<HTMLDivElement> = useRef(null);
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

export default OutsideExample;
