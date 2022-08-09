import {useEffect, useState} from 'react';

export interface useTickProps {
  isActive: boolean;
  msDelay: number;
  count: number;
}

export interface useTickHook {
  timestamp: string;
  tick: number;
}

export const useTick = ({isActive, msDelay, count}: useTickProps): useTickHook => {
  const now = () => Date.now().toString().slice(0, 10);
  const [tick, setNextTick] = useState(count);
  const [timestamp, setTimestamp] = useState(now());

  useEffect(() => {
    let id: ReturnType<typeof setTimeout>;
    if (isActive) {
      id = setTimeout(() => {
        if (tick > 0) {
          const next = tick - 1;
          setNextTick(next);
        } else {
          setNextTick(count);
          setTimestamp(now());
        }
      }, msDelay);
    } else {
      setNextTick(count);
      setTimestamp(now());
    }

    return () => clearTimeout(id);
  }, [isActive, tick, msDelay, count]);

  return {timestamp, tick};
};

export default useTick;
