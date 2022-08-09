import {renderHook} from '@testing-library/react-hooks';
import {usePrevious} from './use-previous';

describe('Test usePrevious', () => {
  let hook;

  describe('Primitive values', () => {
    beforeEach(() => {
      hook = () => renderHook(
        value => usePrevious(value),
        {initialProps: 0}
      );
    });

    it('return undefined on first render', () => {
      const {result} = hook();
      expect(result.current).toEqual(undefined);
    });

    it('return previous value after update', () => {
      const {result, rerender} = hook();

      rerender(1);
      expect(result.current).toEqual(0);

      rerender(5);
      expect(result.current).toEqual(1);

      rerender(10);
      expect(result.current).toEqual(5);
    });
  });

  describe('Object state', () => {
    beforeEach(() => {
      let initialState = {value: 0};

      hook = () => renderHook(
        state => usePrevious(state),
        {initialProps: initialState}
      );
    });

    it('return undefined on first render', () => {
      const {result} = hook();
      expect(result.current).toEqual(undefined);
    });

    it('return previous value after update', () => {
      const {result, rerender} = hook();

      rerender({value: 1});
      expect(result.current).toEqual({value: 0});

      rerender({value: 5});
      expect(result.current).toEqual({value: 1});

      rerender({value: 10});
      expect(result.current).toEqual({value: 5});
    });
  });
});
