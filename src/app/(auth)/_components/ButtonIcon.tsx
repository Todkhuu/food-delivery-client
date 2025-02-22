import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

type ButtonIconProps = {
  handleBack: () => void;
};

export const ButtonIcon = ({ handleBack }: ButtonIconProps) => {
  return (
    <Button onClick={handleBack} variant={"outline"} size="icon">
      <ChevronLeft />
    </Button>
  );
};
