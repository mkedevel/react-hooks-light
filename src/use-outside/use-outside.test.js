import {renderHook, act} from '@testing-library/react-hooks';
import {useOutside} from './use-outside';

describe('Test useOutside', () => {
  let hook;
  let onOutClick;
  const map = {};

  beforeEach(() => {
    hook = () => renderHook(state => useOutside(state));
    document.addEventListener = jest.fn((event, callback) => {
      map[event] = callback;
    });

    onOutClick = jest.fn();
  });

  it('document.addEventListener called without onOutClick, isActive = true', async () => {
    const {rerender} = hook();
    rerender({
      ref: {current: {contains: jest.fn(() => true)}},
      isActive: true,
      onOutClick
    });

    act(() => {
      map.mousedown({target: document.createElement('div')});
    });

    expect(document.addEventListener).toHaveBeenCalled();
  });

  it('document.addEventListener called without onOutClick, isActive = false', async () => {
    const {rerender} = hook();
    rerender({
      ref: {current: {contains: jest.fn(() => false)}},
      isActive: false,
      onOutClick
    });

    act(() => {
      map.mousedown({target: document.createElement('div')});
    });

    expect(document.addEventListener).toHaveBeenCalled();
  });

  it('document.addEventListener called with onOutClick, isActive = true && contains return true', async () => {
    const {rerender} = hook();
    rerender({
      ref: {current: {contains: jest.fn(() => false)}},
      isActive: true,
      onOutClick
    });

    act(() => {
      map.mousedown({target: document.createElement('div')});
    });

    expect(document.addEventListener).toHaveBeenCalled();
    expect(onOutClick).toHaveBeenCalled();
  });
});
