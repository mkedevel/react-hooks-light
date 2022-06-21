import {renderHook, act} from '@testing-library/react-hooks';
import {useHover} from './use-hover';

describe('Test useHover', () => {
  let hook;

  beforeEach(() => {
    hook = () => renderHook(() => useHover());
  });

  it('initial state', () => {
    const {result} = hook();
    expect(result.current.isHover).toBeFalsy();
  });

  it('check isHover value changes onMouseOver', () => {
    const {result} = hook();
    const {onMouseOver} = result.current;

    expect(result.current.isHover).toBeFalsy();
    act(() => onMouseOver());
    expect(result.current.isHover).toBeTruthy();
  });

  it('check isHover value changes onMouseOut', () => {
    const {result} = hook();
    const {onMouseOver, onMouseOut} = result.current;

    expect(result.current.isHover).toBeFalsy();

    act(() => onMouseOver());
    expect(result.current.isHover).toBeTruthy();

    act(() => onMouseOut());
    expect(result.current.isHover).toBeFalsy();
  });
});
