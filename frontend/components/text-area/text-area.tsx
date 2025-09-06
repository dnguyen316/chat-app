import { Input } from "antd";
import type { ChangeEventHandler } from "react";

interface ITextAreaProps {
    onChange: ChangeEventHandler<HTMLTextAreaElement>
}

const TextArea = ({ onChange, ...rest }: ITextAreaProps) => {
    return (
        <Input.TextArea onChange={onChange} {...rest}/>
    )
}

export default TextArea;