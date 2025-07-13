
import React from 'react';
import { ButtonProps } from '../../interfaces/index';

const baseStyles =
  "flex flex-row gap-1 items-center justify-center rounded-3xl transition focus:outline-none focus:ring-2 focus:ring-stone-600 focus:ring-offset-4";

const variants = {
  primary: "px-4 py-2 text-base bg-[#34967c] text-white hover:bg-[#1D5848]",
  secondary: "px-4 py-2 text-base bg-white border border-gray-200 text-slate-900 hover:bg-gray-100",
  black: "px-3 py-[6px] text-sm bg-[#161117] text-white hover:bg-slate-800",
  ghost: "px-4 py-2 text-base bg-white border border-gray-200 text-slate-900 hover:bg-gray-100 active:bg-[#34967c] active:text-[#34967c]",
};


const Button: React.FC<ButtonProps> = ({ children, onClick, disabled = false, type = 'button', variant = "primary", icon = false}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {icon}{children}
    </button>
  );
};

export default Button;
