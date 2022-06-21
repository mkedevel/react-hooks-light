import React, {useState} from 'react';
import usePrevious from '../use-previous/use-previous';

export const PreviousExample = () => {
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

export default PreviousExample;
