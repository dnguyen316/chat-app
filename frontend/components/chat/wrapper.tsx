import type React from "react";

interface IChatWrapperProps {
  children: React.ReactNode;
}

const ChatWrapper = ({ children }: IChatWrapperProps) => {
  return <div>{children}</div>;
};

export default ChatWrapper;
