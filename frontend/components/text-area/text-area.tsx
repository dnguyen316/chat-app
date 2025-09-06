import { Input } from "antd";
import type { ChangeEventHandler } from "react";

interface ITextAreaProps {
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
  placeholder: string;
}

const TextArea = ({ onChange, ...rest }: ITextAreaProps) => {
  return (
    <Input.TextArea onChange={onChange} {...rest} className="min-h-[40px]!" />
  );
};

export default TextArea;
