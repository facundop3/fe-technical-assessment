import classNames from "classnames";
import { FC, ReactNode } from "react";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  rightIcon?: ReactNode;
  className?: string;
}
export const Button: FC<ButtonProps> = ({
  children,
  rightIcon = null,
  className,
  ...rest
}) => {
  const baseClasses =
    "shadow-xs border border-[#09090B14] rounded-md font-semibold w-auto py-1.5 px-3 box-border shadow-sm shadow-[#1018280D)]";
  return (
    <button {...rest} className={classNames(baseClasses, className)}>
      <div className="flex gap-x-1.5 justify-center items-center ">
        {children}
        {rightIcon}
      </div>
    </button>
  );
};
