import React, { useContext, useEffect, useRef, useState } from "react";
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
import DownloadingIcon from "@mui/icons-material/Downloading";
import ClearIcon from "@mui/icons-material/Clear";
import useDataFetcher from "../../api/useDataFetcher ";
const Layout = ({ children, showNavFooter = true, contentStyles = {} }) => {
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
          notificationData={notificationData}
        />
      )}
      <main style={contentStyles}>{children}</main>
      {showNavFooter &&
        !hideFooter &&
        (!hideNavAndFooter || !isMediumScreen) && <FooterTwo />}

      {isUserSelected && <ChatDialog setIsUserSelected={setIsUserSelected} />}
    </div>
  );
};

const ChatDialog = () => {
  const {
    message,
    setMessage,
    socket,
    messages,
    setIsUserSelected,
    setIsSendMessage,
    recipientId,
    user,
    file,
    setFile,
    userKlickedData,
    setUserKlickedData,
    fileData,
    setFileData,
  } = useContext(ChatContext);

  const { i18n } = useTranslation();
  const lang = i18n.language;
  const fileInputRef = useRef(null);

  const handleSend = async () => {
    const formData = new FormData();
    formData.append("message", message);
    formData.append("to_user_id", recipientId);
    formData.append("file", file);
    setIsSendMessage((prev) => !prev);
    await fetch("https://www.dashboard.aqartik.com/api/chat/sendMessage", {
      method: "POST",
      headers: {
        authorization: `Bearer ${localStorage.getItem("user_token")}`,
      },
      body: formData,
    });
  };
  const handleAttachFile = () => {
    fileInputRef.current.click();
  };

  console.log(file);

  const cancelSelectedFile = () => {
    setFile(null);
  };
  return (
    <ChatDialogStyle $dir={lang}>
      <header>
        <div className="header-data">
          <img src={userKlickedData?.image?.name} alt="" />
          <span>{userKlickedData?.username}</span>
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
              ele?.senderId === user?.id || ele?.from_id === user?.id
                ? "send-container"
                : "recieve-container"
            }`}
            key={i}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                className={`message ${
                  ele?.senderId === user?.id || ele?.from_id === user?.id
                    ? "sended-message"
                    : "recieved-message"
                }`}
              >
                <p>{ele?.message || ele.body}</p>

                {ele?.attachment && (
                  <a
                    style={{
                      textDecoration: "none",
                      color: "white",
                      backgroundColor: "rgba(200,200,200,.5)",
                      padding: "8px 4px",
                      borderRadius: "8px",
                      display: "flex",
                      gap: "8px",
                      alignItems: "center",
                      marginTop: ".5rem",
                    }}
                    href={`https://www.dashboard.aqartik.com/assets/chat/attachment/${ele.attachment}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>{ele.attachment}</span>
                    <DownloadingIcon />
                  </a>
                )}
              </div>
              <span
                style={{
                  alignSelf:
                    ele?.senderId === user?.id || ele?.from_id === user?.id
                      ? "flex-start"
                      : "flex-end",
                  fontSize: "12px",
                  padding: "2px",
                }}
              >
                22/ 7/ 2023 20: 50
              </span>
            </div>
            {/* {!(ele?.socketID == socket?.id) && (
              <img src={userData?.image?.name} alt="" />
            )} */}
          </div>
        ))}
      </main>

      <footer>
        {file && (
          <div className="selected-file">
            <span>{file?.name}</span>
            <ClearIcon onClick={cancelSelectedFile} />
          </div>
        )}
        <div className="footer-container">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            type="text"
            rows={"1"}
            placeholder="your text here..."
          ></textarea>
          <button>
            <AttachFileIcon onClick={handleAttachFile} />
          </button>
          <input
            ref={fileInputRef}
            type="file"
            style={{ display: "none" }}
            onChange={(e) => {
              // Handle the selected file
              const selectedFile = e.target.files[0];
              setFile(selectedFile);
              const reader = new FileReader();
              reader.onload = () => {
                const fileData = {
                  filename: selectedFile.name,
                  content: reader.result,
                };
                setFileData(fileData);
              };
              reader.readAsArrayBuffer(selectedFile);
            }}
          />
          <button onClick={handleSend}>
            <SendIcon
              sx={{
                transform: lang === "ar" ? "rotate(180deg)" : "",
              }}
            />
          </button>
        </div>
      </footer>
    </ChatDialogStyle>
  );
};
export { Layout };
