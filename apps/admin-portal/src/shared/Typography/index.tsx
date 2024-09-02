import { TypographyProps } from "./types.ts";
import { cn } from "../../utils";
import s from "./style.module.css";

export const Typography = ({
  className,
  type = "body1",
  children,
}: TypographyProps) => {
  switch (type) {
    case "body1":
    case "body2":
    case "caption2":
      return <p className={cn(s.typography, s[type], className)}>{children}</p>;
    case "h3":
      return (
        <h3 className={cn(s.typography, s[type], className)}>{children}</h3>
      );
    default:
      return <p>{children}</p>;
  }
};
