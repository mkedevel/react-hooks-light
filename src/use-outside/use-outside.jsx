/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect} from 'react';

export const useOutside = ({ref, isActive, onOutClick}) => {
  const handleClickOutside = event => {
    if (isActive && ref && ref.current && !ref.current.contains(event.target)) {
      onOutClick();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isActive]);
};

export default useOutside;
