import React from "react";
import { Button as AntButton } from "antd";
import type { ButtonProps } from "antd";

interface IButtonProps extends ButtonProps {
  children: React.ReactNode;
}

const Button = ({ children, ...rest }: IButtonProps) => {
  return <AntButton {...rest}>{children}</AntButton>;
};

export default Button;
