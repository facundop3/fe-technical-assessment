import { ReactNode } from "react";

export interface HeadingProps {
  children: ReactNode;
  as?: "h1" | "h2";
}
export const Heading = ({ children, as = "h1" }: HeadingProps) => {
  if (as === "h1") {
    return <h1 className="font-bold text-[30px]">{children}</h1>;
  }
  if (as === "h2") {
    return <h2 className="font-bold">{children}</h2>;
  }
};
