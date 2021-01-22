import { useState, useEffect } from 'react';

const UseStepper = (transitionData, steps) => {
  const [step, setStep] = useState(1);
  const percent = (transitionData.percent * 10).toFixed();

  useEffect(() => {
    if (percent < steps?.[0]) {
      setStep(1);
    } else if (percent >= steps?.[0] && percent < steps?.[1]) {
      setStep(2);
    } else if (percent >= steps?.[1] && percent < steps?.[2]) {
      setStep(3);
    } else if (percent >= steps?.[2] && percent < steps?.[3]) {
      setStep(4);
    } else if (percent >= steps?.[3]) {
      setStep(5);
    }
  }, [percent]);

  return step;
};

export default UseStepper;
