"use client";

import { useState } from "react";
import { ForgetPassword } from "./components/ForgetPassword";
import { Login } from "./components/Login";
import { ResendEmail } from "./components/ResendEmail";
import { CreateNew } from "./components/CreateNewPass";

const Page = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const FormSteps = [Login, ForgetPassword, ResendEmail, CreateNew][
    currentStep
  ];
  return (
    <div className="w-2/5 flex items-center justify-center">
      <FormSteps currentStep={currentStep} setCurrentStep={setCurrentStep} />
    </div>
  );
};
export default Page;
