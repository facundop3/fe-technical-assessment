import { ReactNode } from "react";

export interface IconButtonProps {
  ariaLabel: string;
  icon: ReactNode;
}
export const IconButton = ({ icon, ...rest }: IconButtonProps) => {
  return (
    <button
      {...rest}
      className="h-6 w-6 bg-[#09090B0A] p-[5.51px] border-0 shadow-[none] rounded-md flex items-center justify-center"
    >
      {icon}
    </button>
  );
};
