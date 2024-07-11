import { ReactNode } from "react";
import { Button } from "./Button";
import { ArrowDownIcon } from "./icons/ArrowDownIcon";

interface DropdownProps {
  children: ReactNode;
}
export const Dropdown = ({ children }: DropdownProps) => {
  return (
    <Button className="text-[13px] leading-5 shadow-[none] border-[0.5px]">
      {children} <ArrowDownIcon />
    </Button>
  );
};
