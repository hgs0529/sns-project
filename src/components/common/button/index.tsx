import React from "react";
import styled from "@emotion/styled";

type SizeType = "sm" | "md" | "lg";

interface ButtonProps
  extends Omit<React.HTMLAttributes<HTMLButtonElement>, "prefix"> {
  children: React.ReactNode;
  size?: SizeType;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  color?: "";
  justify?: "center" | "flex-start" | "flex-end" | "space-between";
  loading?: boolean;
}

const Button = ({ children, prefix, suffix, ...props }: ButtonProps) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

const StyledButton = styled.button<ButtonProps>``;

export default Button;
