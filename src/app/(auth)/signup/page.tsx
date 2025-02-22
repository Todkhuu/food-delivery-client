"use client";
import { useState } from "react";
import { CreateAccount } from "./components/CreateAccount";
import { CreatePassword } from "./components/CreatePassword";

const Signup = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const FormSteps = [CreateAccount, CreatePassword][currentStep];
  return (
    <div className="w-2/5 flex justify-center items-center">
      <FormSteps currentStep={currentStep} setCurrentStep={setCurrentStep} />
    </div>
  );
};
export default Signup;
