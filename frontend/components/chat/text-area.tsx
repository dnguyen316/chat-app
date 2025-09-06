import { Button } from "antd";
import TextArea from "components/text-area/text-area";
import type { ChangeEventHandler } from "react";
import SendPlaneFillIcon from "components/icons/send-plane-fill";

const ChatTextArea = () => {
  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = () => {};

  return (
    <div className="flex gap-2">
      <TextArea onChange={handleChange} placeholder="Ask me anything..." />
      <Button type="primary" className="min-h-[40px]">
        <SendPlaneFillIcon /> Submit
      </Button>
    </div>
  );
};

export default ChatTextArea;
