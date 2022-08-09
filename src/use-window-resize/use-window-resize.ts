import {useState, useMemo, useEffect} from 'react';
import {DocumentSize} from '../types';

export interface useWindowResizeProps {
  onResize?: () => void;
}

export const useWindowResize = ({onResize = () => undefined} = <useWindowResizeProps>{}): DocumentSize => {
  const [documentSize, setDocumentSize] = useState<DocumentSize>({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  });

  const resizeHandler = useMemo(() => () => {
    const documentSize = {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    };

    setDocumentSize(documentSize);
    if (onResize) {
      onResize();
    }
  }, [onResize]);

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    return () => window.removeEventListener('resize', resizeHandler);
  }, [resizeHandler]);

  return documentSize;
};

export default useWindowResize;
