"use client";
import { useState } from "react";
import { CreateAccount } from "./components/CreateAccount";
import { CreatePassword } from "./components/CreatePassword";

const Signup = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const FormSteps = [CreateAccount, CreatePassword][currentStep];
  const [email, setEmail] = useState("");
  const handleEmail = (email: string) => {
    setEmail(email);
  };
  return (
    <div className="w-2/5 flex justify-center items-center">
      <FormSteps
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        email={email}
        handleEmail={handleEmail}
      />
    </div>
  );
};
export default Signup;
