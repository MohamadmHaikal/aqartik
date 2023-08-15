import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import FooterTwo from "./FooterTwo";
import { useLocation } from "react-router-dom";
import { useMediaQuery, useTheme } from "@mui/material";
import { io } from "socket.io-client";
import { ChatDialogStyle } from "../../styledComponents/MainPageStyles";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import SendIcon from "@mui/icons-material/Send";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import ChatContext from "../../context/chatContext";
import { useTranslation } from "react-i18next";
import { Toaster } from "react-hot-toast";
import useDataFetcher from "../../api/useDataFetcher ";

const Layout = ({
  children,
  showNavFooter = true,
  contentStyles = {},
  generalData,
}) => {
  const location = useLocation();
  const { pathname } = location;
  const hideFooter = location.pathname.includes("/mappage");
  const hideNavAndFooter =
    location.pathname.includes("/details") || pathname === "/ads";
  const { isUserSelected, setIsUserSelected } = useContext(ChatContext);

  const theme = useTheme();
  // Use Mui useMediaQuery to check if screen size is medium (md) and below
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  // for socket states
  const [showMessages, setShowMessages] = useState(false);
  const [userData, setUserData] = useState();
  // for socket states

  // for notifiacetion
  const { data, isLoading, get } = useDataFetcher();
  const [notificationData, setNotificationData] = useState([]);

  useEffect(() => {
    get("api/user/get_user_notifications");
  }, []);
  useEffect(() => {
    if (data) {
      setNotificationData(data);
    }
  }, [data]);

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      {showNavFooter && (!hideNavAndFooter || !isMediumScreen) && (
        <Nav
          showMessages={showMessages}
          setShowMessages={setShowMessages}
          isUserSelected={isUserSelected}
          setIsUserSelected={setIsUserSelected}
          setUserData={setUserData}
          notificationData={notificationData}
          generalData={generalData}
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

const ChatDialog = ({ userData }) => {
  const [socket, setSocket] = useState(null);
  const [message, setMessage] = useState();
  const [messages, setMessages] = useState([]);
  const { i18n } = useTranslation();
  const { setIsUserSelected } = useContext(ChatContext);
  const lang = i18n.language;

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
    <ChatDialogStyle $dir={lang}>
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
          <SendIcon
            sx={{
              transform: lang === "ar" ? "rotate(180deg)" : "",
            }}
          />
        </button>
      </footer>
    </ChatDialogStyle>
  );
};
export { Layout };
