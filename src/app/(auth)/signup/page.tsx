"use client";
import { useState } from "react";
import { FirstStep } from "./components/FirstStep";
import { SecondStep } from "./components/SecondStep";

const Signup = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const FormSteps = [FirstStep, SecondStep][currentStep];
  return (
    <div className="w-2/5 flex justify-center items-center">
      <FormSteps currentStep={currentStep} setCurrentStep={setCurrentStep} />
    </div>
  );
};
export default Signup;
