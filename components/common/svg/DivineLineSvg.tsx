import React, { SVGProps } from "react";

const DivineLineSvg: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="2"
      height="22"
      viewBox="0 0 2 22"
      fill="none"
    >
      <path d="M1 0V22" stroke="#DDDDDD" />
    </svg>
  );
};

export default DivineLineSvg;
