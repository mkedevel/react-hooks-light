import {renderHook, act} from '@testing-library/react-hooks';
import {useHover} from './use-hover.jsx';

describe('E2E useHover', () => {
  let hook;

  beforeEach(() => {
    hook = renderHook(() => useHover()).result;
  });

  it('initial state', () => {
    expect(hook.current.isHover).toBeFalsy();
  });

  it('check isHover value changes onMouseOver', () => {
    const [, onMouseOver] = hook.current;

    expect(hook.current[0]).toBeFalsy();
    act(() => onMouseOver());
    expect(hook.current[0]).toBeTruthy();
  });

  it('check isHover value changes onMouseOut', () => {
    const [, onMouseOver, onMouseOut] = hook.current;

    expect(hook.current[0]).toBeFalsy();

    act(() => onMouseOver());
    expect(hook.current[0]).toBeTruthy();

    act(() => onMouseOut());
    expect(hook.current[0]).toBeFalsy();
  });
});
