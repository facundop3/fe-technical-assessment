import { ReactNode, useMemo } from "react";
import { getFriendlyTailwindColor } from "../../utils/utils";

export interface BadgeProps {
  children: ReactNode;
}

export const Badge = ({ children }: BadgeProps) => {
  const bgColorClass = useMemo(() => getFriendlyTailwindColor(), []);

  return (
    <div className="border border-[#09090B14] rounded-[38px] flex w-fit gap-2 justify-center items-center px-2.5 py-[5px]">
      <div className={`w-2 h-2 rounded-sm ${bgColorClass}`}></div>
      {children}
    </div>
  );
};
