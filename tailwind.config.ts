import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*tsx"],
  theme: {
    extend: {
      colors: {
        "smi-orange": {
          light: "#f7d2a3",
          base: "#fcbd73",
          medium: "#f89c4d",
          strong: "#f05123",
        },
        "smi-black": {
          light: "#868586",
          base: "#6e6f72",
          medium: "#2d2d2c",
          strong: "#232120",
        },
        "smi-white": "#f1f3f4",
      },
    },
  },
  plugins: [],
};
export default config;
