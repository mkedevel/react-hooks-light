import {renderHook} from '@testing-library/react-hooks';
import {useTick} from './use-tick.jsx';

describe('Test useTick', () => {
  let hook;

  beforeEach(() => {
    hook = () => renderHook(
      state => useTick(state),
      {initialProps: {
        isActive: true,
        msDelay: 1000,
        count: 10
      }}
    );
  });

  it('start tick to equal 10', () => {
    const {result} = hook();
    expect(result.current.tick).toEqual(10);
  });

  it('next tick to equal 9', async () => {
    const {result, waitForNextUpdate} = hook();
    await waitForNextUpdate();
    expect(result.current.tick).toEqual(9);
  });
});
