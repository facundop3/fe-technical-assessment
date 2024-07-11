import { ReactNode } from "react";

interface TrProps {
  children: ReactNode;
}
export const Tr = ({ children }: TrProps) => {
  return <tr className="border-b border-b-[#09090B14]">{children}</tr>;
};
