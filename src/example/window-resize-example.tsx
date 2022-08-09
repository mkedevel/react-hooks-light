import React, {useState} from 'react';
import useWindowResize from '../use-window-resize/use-window-resize';

export const WindowResizeExample = () => {
  const [counter, setCounter] = useState(0);

  const resizeHandler = () => {
    setCounter(counter + 1);
  };

  const documentSize = useWindowResize({onResize: resizeHandler});

  return (
    <div>
      document, widht {documentSize.width}, height: {documentSize.height}
      <br/>
      counter resize event: {counter}
    </div>
  );
};

export default WindowResizeExample;
