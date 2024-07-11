import { BaseIconProps } from "./types";

interface ArrowDownIconProps extends BaseIconProps {}
export const ArrowDownIcon = ({ fill = "#09090B" }: ArrowDownIconProps) => {
  return (
    <svg
      width="11"
      height="6"
      viewBox="0 0 11 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.258881 0.5L5.23343 5.47455L10.208 0.5H0.258881Z"
        fill={fill}
      />
    </svg>
  );
};
