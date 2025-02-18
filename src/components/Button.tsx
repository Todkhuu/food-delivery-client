import { Button } from "@/components/ui/button";

export function ButtonDemo({
  text,
  onClick,
}: {
  text?: string;
  onClick?: any;
}) {
  return (
    <Button
      variant={"secondary"}
      onClick={onClick}
      className="w-[100%] mt-[24px]"
    >
      {text}
    </Button>
  );
}
