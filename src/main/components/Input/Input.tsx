import { ComponentProps } from "react";

interface InputProps extends ComponentProps<"input"> {}

export const Input: React.FC<InputProps> = ({ ...props }) => {
  return (
    <input
      className="px-3 py-2 border border-slate-200 shadow-sm flex-1"
      {...props}
    />
  );
};
