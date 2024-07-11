import classNames from "classnames";
import { ReactNode } from "react";

interface TdProps {
  children: ReactNode;
  className?: string;
}
export const Td = ({ children, className }: TdProps) => {
  const baseClasses = "text-left px-4 h-16 text-sm";

  return <td className={classNames(baseClasses, className)}>{children}</td>;
};
