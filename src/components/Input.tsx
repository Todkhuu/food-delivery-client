import { Input } from "@/components/ui/input";

export function InputDemo({
  placeholder,
  type,
}: {
  placeholder?: string;
  type: string;
}) {
  return (
    <Input
      type={type}
      placeholder={placeholder}
      className="w-[416px] h-[36px]"
    />
  );
}
