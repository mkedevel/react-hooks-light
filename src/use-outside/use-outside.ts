import {useEffect, useMemo} from 'react';

export interface useOutsideProps {
  ref: React.RefObject<HTMLElement>;
  isActive: boolean;
  onOutClick: () => void;
}

export const useOutside = ({ref, isActive, onOutClick}: useOutsideProps): void => {
  const handleClickOutside = useMemo(() => (e: MouseEvent) => {
    if (isActive && ref && ref.current && !ref.current.contains(e.target as HTMLElement)) {
      onOutClick();
    }
  }, [isActive, ref, onOutClick]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isActive, handleClickOutside]);
};

export default useOutside;
