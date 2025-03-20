"use client";
import { useState } from "react";
import { Reset } from "./_components/Reset";
import { ResendEmail } from "./_components/ResendEmail";
import { toast } from "sonner";

const Page = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [email, setEmail] = useState("");
  const FormSteps = [Reset, ResendEmail][currentStep];

  const resetPassword = async (email: string) => {
    const response = await fetch(
      `http://localhost:8000/auth/reset-password-request`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      }
    );
    const users = await response.json();
    toast(users.message);
  };

  return (
    <div className="w-2/5 flex items-center justify-center">
      <FormSteps
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        resetPassword={resetPassword}
        email={email}
        setEmail={setEmail}
      />
    </div>
  );
};
export default Page;
