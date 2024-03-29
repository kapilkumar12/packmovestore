import React, { useState, useEffect, useRef } from "react";

const CountUp = ({ start, end, timer }) => {
  const [state, setState] = useState(null);
  const ref = useRef(start);
  const accumulator = end / 99;
  const updateCounterState = () => {
    if (ref.current < end) {
      const result = Math.ceil(ref.current + accumulator);
      if (result > end) return setState(end);
      setState(result);
      ref.current = result;
    }
    setTimeout(updateCounterState, timer);
  };
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      updateCounterState();
    }
    return () => {
      isMounted = false;
    };
    // eslint-disable-next-line
  }, [end, start]);
  return <>{state}</>;
};

export default CountUp;
