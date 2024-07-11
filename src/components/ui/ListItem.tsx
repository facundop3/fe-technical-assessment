import { PropsWithChildren } from "react";

export const ListItem = ({ children }: PropsWithChildren) => (
  // TODO: check what's wrong with the font, using font-size 12px, line height 20 and font weight 500 looks way smaller than figma (same settings on figma)
  <li className="text-aside-text font-medium">
    <div className="flex items-center gap-2 font-medium">{children}</div>
  </li>
);
