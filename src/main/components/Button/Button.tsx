import { ComponentProps } from "react";
import { VariantProps, tv } from "tailwind-variants";

const buttonVariants = tv({
  base: "px-4 py-3 border border-slate-200 shadow-sm rounded-lg font-semibold bg-smi-white",
  variants: {
    mode: {
      primary: "bg-smi-orange-strong text-smi-white",
      outlined: "",
    },
  },

  defaultVariants: {
    mode: "outlined",
  },
});

interface ButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {}

export const Button: React.FC<ButtonProps> = ({ mode, ...props }) => {
  return <button className={buttonVariants({ mode })} {...props}></button>;
};
