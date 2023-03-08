import React from "react";

const Button = (props) => {
  const { children, className } = props;
  return (
    <button
      className={`${"bg-orange-500 text-white w-56 p-2 rounded-lg"} ${className} `}
    >
      {children}
    </button>
  );
};

export default Button;
