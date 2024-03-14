import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

const AnimatedNumber = ({ targetNumber }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ trigger: 'inView' });

  useEffect(() => {
    if (inView) {
      setCount(targetNumber);
    }
  }, [inView, targetNumber]);

  const props = useSpring({
    number: count,
    from: { number: 0 },
    to: { number: inView ? targetNumber : 0 },
    config: { duration: 1500 },
  });

  return (
    <div ref={ref}>
      <animated.div>{props.number.to(value => Math.floor(value))}</animated.div>
    </div>
  );
};

export default AnimatedNumber;
