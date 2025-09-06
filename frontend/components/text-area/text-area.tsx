import { Input } from "antd";
import type { ChangeEventHandler } from "react";

interface ITextAreaProps {
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
  placeholder: string;
  autoSize?: {
    minRows?: number;
    maxRows?: number;
  };
}

const TextArea = ({ onChange, ...rest }: ITextAreaProps) => {
  return (
    <Input.TextArea
      styles={{
        textarea: {
          paddingTop: "12px",
          paddingBottom: "12px",
          lineHeight: "20px",
        },
      }}
      onChange={onChange}
      {...rest}
      className="min-h-[40px]!"
    />
  );
};

export default TextArea;
