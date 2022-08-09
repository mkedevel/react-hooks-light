
import {renderHook, act} from '@testing-library/react-hooks';
import {useWindowResize} from './use-window-resize';

describe('Test useOutside', () => {
  let hook;
  let onResize;
  const map = {};

  beforeEach(() => {
    hook = () => renderHook(state => useWindowResize(state));
    window.addEventListener = jest.fn((event, callback) => {
      map[event] = callback;
    });

    onResize = jest.fn();
  });

  it('initial state', () => {
    const {result} = hook();
    expect(result.current).toEqual({
      width: 0,
      height: 0
    });
  });

  it('window.addEventListener called', async () => {
    const {rerender} = hook();
    rerender({onResize});

    act(() => {
      map.resize();
    });

    expect(window.addEventListener).toHaveBeenCalled();
    expect(onResize).toHaveBeenCalled();
  });
});
