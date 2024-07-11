import { ReactNode } from "react";

interface ThProps {
  children: ReactNode;
}
export const Th = ({ children }: ThProps) => {
  return (
    <th className="text-left px-4 text-sm font-semibold h-14">{children}</th>
  );
};
