import { Dispatch } from "react";
import { FormOneInput } from "@/app/(auth)/_components/FormOneInput";
import { ButtonIcon } from "../../_components/ButtonIcon";
import { useRouter } from "next/navigation";
import { Texts } from "../../_components/Texts";
import { ButtonLink } from "../../_components/ButtonLink";

type firstStepProps = {
  currentStep: number;
  setCurrentStep: Dispatch<number>;
};

export const CreateAccount = ({
  currentStep,
  setCurrentStep,
}: firstStepProps) => {
  const router = useRouter();

  const handleBack = () => {
    router.push("/");
  };
  return (
    <div className="w-[416px]">
      <ButtonIcon handleBack={handleBack} />
      <Texts
        header="Create your account"
        paragraph="Sign up to explore your favorite dishes."
      />
      <FormOneInput currentStep={currentStep} setCurrentStep={setCurrentStep} />
      <ButtonLink text="Log in" url="/login" lorem="Already have an account?" />
    </div>
  );
};
