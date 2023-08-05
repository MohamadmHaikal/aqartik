import { createContext, useState } from "react";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [isUserSelected, setIsUserSelected] = useState(false);

  return (
    <ChatContext.Provider
      value={{
        isUserSelected,
        setIsUserSelected,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export default ChatContext;
