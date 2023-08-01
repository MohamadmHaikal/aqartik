import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import FooterTwo from "./FooterTwo";
import { useLocation } from "react-router-dom";
import { useMediaQuery, useTheme } from "@mui/material";
import { io } from "socket.io-client";
import { ChatDialogStyle } from "../../styledComponents/MainPageStyles";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import SendIcon from "@mui/icons-material/Send";
import AttachFileIcon from "@mui/icons-material/AttachFile";

const Layout = ({ children, showNavFooter = true, contentStyles = {} }) => {
  const location = useLocation();
  const { pathname } = location;
  const hideFooter = pathname === "/mappage" || pathname === "/Mappage";
  const hideNavAndFooter = pathname === "/details";

  const theme = useTheme();
  // Use Mui useMediaQuery to check if screen size is medium (md) and below
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [showMessages, setShowMessages] = useState(false);

  const [isUserSelected, setIsUserSelected] = useState(false);
  const [userData, setUserData] = useState();

  return (
    <div>
      {showNavFooter && (!hideNavAndFooter || !isMediumScreen) && (
        <Nav
          showMessages={showMessages}
          setShowMessages={setShowMessages}
          isUserSelected={isUserSelected}
          setIsUserSelected={setIsUserSelected}
          setUserData={setUserData}
        />
      )}
      <main style={contentStyles}>{children}</main>
      {showNavFooter &&
        !hideFooter &&
        (!hideNavAndFooter || !isMediumScreen) && <FooterTwo />}

      {isUserSelected && (
        <ChatDialog userData={userData} setIsUserSelected={setIsUserSelected} />
      )}
    </div>
  );
};

const ChatDialog = ({ userData, setIsUserSelected }) => {
  const [socket, setSocket] = useState(null);
  const [message, setMessage] = useState();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const newSocket = io("http://localhost:3001");
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  useEffect(() => {
    socket !== null &&
      socket.on("recieveMessages", (data) => {
        setMessages((prev) => [...prev, data]);
      });
  }, [socket]);

  const handleSend = () => {
    socket !== null && socket.emit("sendMessages", message);
    setMessage("");
  };

  return (
    <ChatDialogStyle>
      <header>
        <div className="header-data">
          <img src={userData?.img} alt="" />
          <span>{userData?.name}</span>
        </div>
        <CloseRoundedIcon
          className="close-icon"
          onClick={() => setIsUserSelected(false)}
        />
      </header>

      <main>
        {messages.map((ele, i) => (
          <div
            className={`message-container ${
              ele?.socketID == socket?.id
                ? "send-container"
                : "recieve-container"
            }`}
            key={i}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                className={`message ${
                  ele?.socketID == socket?.id
                    ? "sended-message"
                    : "recieved-message"
                }`}
              >
                <p>{ele.message}</p>
              </div>
              <span
                style={{
                  alignSelf:
                    ele?.socketID === socket?.id ? "flex-start" : "flex-end",
                  fontSize: "12px",
                  padding: "2px",
                }}
              >
                22/ 7/ 2023 20: 50
              </span>
            </div>
            {!(ele?.socketID == socket?.id) && (
              <img src={userData?.img} alt="" />
            )}
          </div>
        ))}
      </main>

      <footer>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          rows={"1"}
          placeholder="your text here..."
        ></textarea>
        <button>
          <AttachFileIcon />
        </button>
        <button onClick={handleSend}>
          <SendIcon />
        </button>
      </footer>
    </ChatDialogStyle>
  );
};

export { Layout };
