"use client";

import { useState } from "react";
import { Reset } from "./components/Reset";
import { Login } from "./components/Login";
import { ResendEmail } from "./components/ResendEmail";
import { CreateNewPassword } from "./components/CreateNewPassword";

const Page = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const FormSteps = [Login, Reset, ResendEmail, CreateNewPassword][currentStep];
  return (
    <div className="w-2/5 flex items-center justify-center">
      <FormSteps currentStep={currentStep} setCurrentStep={setCurrentStep} />
    </div>
  );
};
export default Page;
