import { Button } from "@/components/ui/button";

export function ButtonDemo({ text }: { text?: string }) {
  return (
    <Button type="submit" variant={"secondary"} className="w-[100%] mt-[24px]">
      {text}
    </Button>
  );
}
