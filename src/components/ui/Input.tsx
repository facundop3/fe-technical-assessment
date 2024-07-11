import classNames from "classnames";
import { ReactNode } from "react";

export interface InputProps {
  leftIcon?: ReactNode;
  className?: string;
  placeholder?: string;
}

export const Input = ({ leftIcon = null, className, ...rest }: InputProps) => {
  const containerBaseClasses =
    "border border-[#00000029] rounded-md font-semibold w-auto py-1.5 px-3 box-border shadow shadow-[#1018281A)] flex items-center text-sm font-normal gap-2";
  return (
    <label className={classNames(containerBaseClasses, className)}>
      <div className="h-full flex items-center">{leftIcon}</div>
      <input {...rest} />
    </label>
  );
};
