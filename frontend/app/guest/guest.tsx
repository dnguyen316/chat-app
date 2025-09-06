import ChatComponent from "components/chat";

const GuestPage = () => {
  return (
    <ChatComponent.ChatWrapper>
      <ChatComponent.ChatContent />
      <ChatComponent.ChatTextArea />
    </ChatComponent.ChatWrapper>
  );
};

export default GuestPage;
