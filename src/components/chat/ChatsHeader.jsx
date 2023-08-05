import { useTranslation } from "react-i18next";
import { ListItemDiv } from "../../styledComponents/MainPageStyles";

const data = [
  {
    id: 1,
    img: "/images/p1.JPG",
    name: "lara croft",
    message: "lorem ipsum is awesome, lorem ipsum is awesome",
  },
  {
    id: 2,
    img: "/images/p2.JPG",
    name: "esabella",
    message: "lorem ipsum is awesome",
  },
  {
    id: 3,
    img: "/images/p3.JPG",
    name: "nour al tabbaa",
    message: "lorem ipsum is awesome awesome",
  },
  {
    id: 1,
    img: "/images/p1.JPG",
    name: "lara croft",
    message: "lorem ipsum is awesome, lorem ipsum is awesome",
  },
  {
    id: 2,
    img: "/images/p2.JPG",
    name: "esabella",
    message: "lorem ipsum is awesome",
  },
  {
    id: 3,
    img: "/images/p3.JPG",
    name: "nour al tabbaa",
    message: "lorem ipsum is awesome awesome",
  },
];

export const ChatsHeader = ({ setIsUserSelected, setUserData }) => {
  const { t } = useTranslation();

  return (
    <div className="messages-wrapper">
      <h3>{t("messages_header.title")}</h3>
      {data.map((ele) => (
        <ListItemDiv
          onClick={() => {
            setIsUserSelected(true);
            setUserData(ele);
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
              src={ele.img}
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
            <h5>{ele.name}</h5>
            <p style={{ fontSize: "14px" }}>{ele.message}</p>
          </div>
        </ListItemDiv>
      ))}
    </div>
  );
};
