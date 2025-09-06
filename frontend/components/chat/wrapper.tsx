import type React from "react";

interface IChatWrapperProps {
  children: React.ReactNode;
}

const ChatWrapper = ({ children }: IChatWrapperProps) => {
  return (
    <div className="flex flex-col justify-between h-full px-[64px] pt-[80px] pb-[24px]">
      {children}
    </div>
  );
};

export default ChatWrapper;
