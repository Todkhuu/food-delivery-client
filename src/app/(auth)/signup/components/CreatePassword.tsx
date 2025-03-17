import { Dispatch } from "react";
import { FormShowPassword } from "@/app/(auth)/_components/FormShowPassword";
import { ButtonIcon } from "../../_components/ButtonIcon";
import { Texts } from "../../_components/Texts";
import { ButtonLink } from "../../_components/ButtonLink";

type firstStepProps = {
  currentStep: number;
  setCurrentStep: Dispatch<number>;
  email: string;
};

export const CreatePassword = ({
  currentStep,
  setCurrentStep,
  email,
}: firstStepProps) => {
  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div className="w-[416px]">
      <ButtonIcon handleBack={handleBack} />
      <Texts
        header="Create a strong password"
        paragraph="Create a strong password with letters, numbers."
      />
      <FormShowPassword route="/login" email={email} />
      <ButtonLink text="Log in" url="/login" lorem="Already have an account?" />
    </div>
  );
};
