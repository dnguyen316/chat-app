import React from 'react';
import { Button as AntButton } from 'antd';

interface IButtonProps {
    children: React.ReactNode
}

const Button = ({ children, ...rest }: IButtonProps) => {

    
    return (
        <AntButton {...rest}>{children}</AntButton>
    )
}

export default Button;