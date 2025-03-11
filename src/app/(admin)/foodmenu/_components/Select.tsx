import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Category } from "@/utils/types";

export const Selects = () => {
  return (
    <>
      <Select>
        <SelectTrigger className="w-[288px]">
          <SelectValue placeholder="" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
        </SelectContent>{" "}
      </Select>
    </>
  );
};
