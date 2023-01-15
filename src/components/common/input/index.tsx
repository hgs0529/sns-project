import styled from "@emotion/styled";
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  h?: number;
  block?: boolean;
}

const Input = ({ h = 56, block, ...props }: InputProps) => {
  return <StyledWrapper block={block}></StyledWrapper>;
};

const StyledWrapper = styled.div<{ block?: boolean }>`
  display: flex;
  flex-direction: column;
  width: ${(p) => (p.block ? "100%" : "auto")};
`;

const InputWrapper = styled.div<InputProps>`
  display: flex;
  width: 100%;
  height: ${(p) => p.h}px;
  border-radius: 8px !important;
  border: 1px solid  !important;
`;

const StyledInput = styled.input``;

export default Input;
