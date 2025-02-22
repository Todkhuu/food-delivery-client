import { FormShowPassword } from "@/app/(auth)/_components/FormShowPassword";
import { Texts } from "../../_components/Texts";

export const CreateNewPassword = () => {
  return (
    <div className="w-[416px]">
      <Texts
        header="Create a new password"
        paragraph="Set a new password with a combination of letters and numbers for better
        security."
      />
      <FormShowPassword route={"/login"} />
    </div>
  );
};
