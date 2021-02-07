import { useState, useEffect } from 'react';
import { getScrollTransition } from 'react-scroll-transitions';

const UseTransitionStepper = (transitionData, steps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [stepTwo, setStepTwo] = useState(0);
  const [stepThree, setStepThree] = useState(0);
  const [stepFour, setStepFour] = useState(0);
  const [stepFive, setStepFive] = useState(0);
  const [stepSix, setStepSix] = useState(0);
  const [stepSeven, setStepSeven] = useState(0);
  const percent = transitionData.percent * 100;

  useEffect(() => {
    if (percent < steps?.[0]) {
      setCurrentStep(1);
    } else if (percent >= steps?.[0] && percent < steps?.[1]) {
      setCurrentStep(2);
    } else if (percent >= steps?.[1] && percent < steps?.[2]) {
      setCurrentStep(3);
    } else if (percent >= steps?.[2] && percent < steps?.[3]) {
      setCurrentStep(4);
    } else if (percent >= steps?.[3] && percent < steps?.[4]) {
      setCurrentStep(5);
    } else if (percent >= steps?.[4] && percent < steps?.[5]) {
      setCurrentStep(6);
    } else if (percent >= steps?.[5]) {
      setCurrentStep(7);
    }
    setStepTwo(
      getScrollTransition({
        percent,
        from: steps?.[0],
        to: steps?.[1],
        transition: 'easeOut',
      }) * 100
    );
    setStepThree(
      getScrollTransition({
        percent,
        from: steps?.[1],
        to: steps?.[2],
        transition: 'easeOut',
      }) * 100
    );
    setStepFour(
      getScrollTransition({
        percent,
        from: steps?.[2],
        to: steps?.[3],
        transition: 'easeOut',
      }) * 100
    );
    setStepFive(
      getScrollTransition({
        percent,
        from: steps?.[3],
        to: steps?.[4],
        transition: 'easeOut',
      }) * 100
    );
    setStepSix(
      getScrollTransition({
        percent,
        from: steps?.[4],
        to: steps?.[5],
        transition: 'easeOut',
      }) * 100
    );
    setStepSeven(
      getScrollTransition({
        percent,
        from: steps?.[5],
        to: steps?.[6],
        transition: 'easeOut',
      }) * 100
    );
  }, [percent]);

  return {
    currentStep,
    stepTwo,
    stepThree,
    stepFour,
    stepFive,
    stepSix,
    stepSeven,
  };
};

export default UseTransitionStepper;
