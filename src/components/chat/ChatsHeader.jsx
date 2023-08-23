import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import useDataFetcher from "../../api/useDataFetcher ";
import ChatContext from "../../context/chatContext";
import { ListItemDiv } from "../../styledComponents/MainPageStyles";

// const data = [
//   {
//     id: 1,
//     img: "/images/p1.JPG",
//     name: "lara croft",
//     message: "lorem ipsum is awesome, lorem ipsum is awesome",
//   },
//   {
//     id: 2,
//     img: "/images/p2.JPG",
//     name: "esabella",
//     message: "lorem ipsum is awesome",
//   },
//   {
//     id: 3,
//     img: "/images/p3.JPG",
//     name: "nour al tabbaa",
//     message: "lorem ipsum is awesome awesome",
//   },
//   {
//     id: 1,
//     img: "/images/p1.JPG",
//     name: "lara croft",
//     message: "lorem ipsum is awesome, lorem ipsum is awesome",
//   },
//   {
//     id: 2,
//     img: "/images/p2.JPG",
//     name: "esabella",
//     message: "lorem ipsum is awesome",
//   },
//   {
//     id: 3,
//     img: "/images/p3.JPG",
//     name: "nour al tabbaa",
//     message: "lorem ipsum is awesome awesome",
//   },
// ];

export const ChatsHeader = ({
  setIsUserSelected,
  setShowMessages,
  showMessages,
}) => {
  const { data, isLoading, get } = useDataFetcher();

  const [contacts, setContacts] = useState([]);
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const { userKlickedData, setUserKlickedData } = useContext(ChatContext);

  useEffect(() => {
    if (showMessages === true) {
      get("/api/chat/getContacts");
    }
  }, [showMessages]);

  useEffect(() => {
    if (data) {
      setContacts(data.contacts);
    }
  }, [data]);

  const { setRecipientId } = useContext(ChatContext);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      const messagesWrapper = document.querySelector(".messages-wrapper");
      const messagesWrapperIcon = document.querySelector(".message-icon");
      if (
        messagesWrapper &&
        !messagesWrapper.contains(event.target) &&
        messagesWrapperIcon &&
        !messagesWrapperIcon.contains(event.target)
      ) {
        setShowMessages(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="messages-wrapper">
      <h3>{t("messages_header.title")}</h3>
      {contacts?.length > 0
        ? contacts.map((ele) => (
            <ListItemDiv
              onClick={() => {
                setIsUserSelected(true);
                setUserKlickedData(ele);
                setRecipientId(ele.id);
              }}
              key={ele.id}
            >
              <div
                style={{
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                }}
              >
                <img
                  src={ele?.image?.name}
                  alt=""
                  style={{
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                  marginTop: "16px",
                }}
              >
                <h5>{ele.username}</h5>
                <p style={{ fontSize: "14px" }}>{ele?.lastMessage?.body}</p>
              </div>
            </ListItemDiv>
          ))
        : lang === "ar"
        ? "لايوجد رسائل لعرضها"
        : "no messages to show"}
    </div>
  );
};
