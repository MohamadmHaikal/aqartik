import { createContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [recipientId, setRecipientId] = useState();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

  const [isUserSelected, setIsUserSelected] = useState(false);
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState();
  const [isSendMessage, setIsSendMessage] = useState();
  const [file, setFile] = useState();
  const [fileData, setFileData] = useState();

  useEffect(() => {
    if (user) {
      const newSocket = io("http://localhost:3001");
      setSocket(newSocket);
      return () => {
        newSocket.disconnect();
      };
    }
  }, [user]);
  useEffect(() => {
    if (socket === null) return;
    socket && socket.emit("addNewUser", user.id);
  }, [socket]);

  console.log(socket);

  //send message
  useEffect(() => {
    if (socket === null) return;
    socket.emit("sendMessage", {
      message: message,
      senderId: user.id,
      recipientId,
      fileData: fileData,
    });
    setMessage("");
    setMessages((prev) => [
      ...prev,
      {
        message: message,
        recipientId,
        senderId: user.id,
        fileData,
      },
    ]);
  }, [isSendMessage]);

  //recieve messages

  useEffect(() => {
    if (socket === null) return;
    // Listen for "getMessage" event
    socket.on("getMessage", (res) => {
      const isInChat = recipientId === res.senderId;
      isInChat && setMessages((prev) => [...prev, res]);
    });

    // Clean up the event listener when component unmounts
    return () => {
      socket.off("getMessage");
    };
  }, [socket, recipientId]);

  useEffect(() => {
    const formData = new FormData();
    formData.append("contact_id", recipientId);

    fetch("https://www.dashboard.aqartik.com/api/chat/getContactMessages", {
      method: "POST",
      headers: {
        authorization: `Bearer ${localStorage.getItem("user_token")}`,
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => setMessages(data.messages))
      .catch((error) => console.error("Error:", error));
  }, [recipientId]);

  const [userKlickedData, setUserKlickedData] = useState();

  return (
    <ChatContext.Provider
      value={{
        isUserSelected,
        setIsUserSelected,
        socket,
        messages,
        message,
        setMessage,
        recipientId,
        setRecipientId,
        setIsSendMessage,
        user,
        file,
        setFile,
        userKlickedData,
        setUserKlickedData,
        fileData,
        setFileData,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export default ChatContext;
