import { BaseIconProps } from "./types";

interface AddIconProps extends BaseIconProps {}
export const AddIcon = ({ fill = "#09090B" }: AddIconProps) => {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.3215 7.38058H7.17868V11.5234H5.46439V7.38058H1.32153V5.66629H5.46439V1.52344H7.17868V5.66629H11.3215V7.38058Z"
        fill={fill}
      />
    </svg>
  );
};
