import {useState} from 'react';

export const useHover = () => {
  const [isHover, setHover] = useState(false);

  const onMouseOver = () => setHover(true);
  const onMouseOut = () => setHover(false);

  return {isHover, onMouseOver, onMouseOut};
};

export default useHover;
