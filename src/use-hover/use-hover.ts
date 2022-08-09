import {useState} from 'react';

export interface useHoverHook {
  isHover: boolean;
  onMouseOver: () => void;
  onMouseOut: () => void;
}

export const useHover = (): useHoverHook => {
  const [isHover, setHover] = useState(false);

  const onMouseOver = () => setHover(true);
  const onMouseOut = () => setHover(false);

  return {isHover, onMouseOver, onMouseOut};
};

export default useHover;
