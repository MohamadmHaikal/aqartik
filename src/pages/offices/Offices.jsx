import { OfficesContainer } from "../../styledComponents/OfficesStyles";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import NoteAddOutlinedIcon from "@mui/icons-material/NoteAddOutlined";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Offices = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const [rating, setRating] = useState(700);
  const nav = useNavigate();

  return (
    <OfficesContainer>
      <h2>{t("offices.title")}</h2>
      <header>
        <span>{t("offices.label")}</span>
        <form>
          <input type="text" placeholder={t("offices.placeholder")} />
          <button>{t("offices.btn")}</button>
        </form>
      </header>

      <section>
        <article>
          <div>
            <div className="office-header">
              <span>{t("offices.office")}:</span>
              <span>
                {t("offices.review")}:
                <span>
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </span>
              </span>
            </div>
            <h4 className="office-name"> مؤسسة تعميد للاستشارات العقارية </h4>
          </div>
          <img className="office-img" src="logo.png" alt="" />
          <button onClick={() => nav("1")}>
            <NoteAddOutlinedIcon /> {t("offices.main_btn")}
          </button>
          <div className="office-footer">
            <span>
              <LocationOnIcon />
              المدينة{" "}
            </span>
            <span>الرياض</span>
          </div>
        </article>
        <article>
          <div>
            <div className="office-header">
              <span>{t("offices.office")}:</span>
              <span>
                {t("offices.review")}:
                <span>
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </span>
              </span>
            </div>
            <h4 className="office-name"> مؤسسة تعميد للاستشارات العقارية </h4>
          </div>
          <img className="office-img" src="logo.png" alt="" />
          <button onClick={() => nav("1")}>
            <NoteAddOutlinedIcon /> {t("offices.main_btn")}
          </button>
          <div className="office-footer">
            <span>
              <LocationOnIcon />
              المدينة{" "}
            </span>
            <span>الرياض</span>
          </div>
        </article>
        <article>
          <div>
            <div className="office-header">
              <span>{t("offices.office")}:</span>
              <span>
                {t("offices.review")}:
                <span>
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </span>
              </span>
            </div>
            <h4 className="office-name"> مؤسسة تعميد للاستشارات العقارية </h4>
          </div>
          <img className="office-img" src="logo.png" alt="" />
          <button onClick={() => nav("1")}>
            <NoteAddOutlinedIcon /> {t("offices.main_btn")}
          </button>
          <div className="office-footer">
            <span>
              <LocationOnIcon />
              المدينة{" "}
            </span>
            <span>الرياض</span>
          </div>
        </article>
        <article>
          <div>
            <div className="office-header">
              <span>{t("offices.office")}:</span>
              <span>
                {t("offices.review")}:
                <span>
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </span>
              </span>
            </div>
            <h4 className="office-name"> مؤسسة تعميد للاستشارات العقارية </h4>
          </div>
          <img className="office-img" src="logo.png" alt="" />
          <button onClick={() => nav("1")}>
            <NoteAddOutlinedIcon /> {t("offices.main_btn")}
          </button>
          <div className="office-footer">
            <span>
              <LocationOnIcon />
              المدينة{" "}
            </span>
            <span>الرياض</span>
          </div>
        </article>
        <article>
          <div>
            <div className="office-header">
              <span>{t("offices.office")}:</span>
              <span>
                {t("offices.review")}:
                <span>
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </span>
              </span>
            </div>
            <h4 className="office-name"> مؤسسة تعميد للاستشارات العقارية </h4>
          </div>
          <img className="office-img" src="logo.png" alt="" />
          <button onClick={() => nav("1")}>
            <NoteAddOutlinedIcon /> {t("offices.main_btn")}
          </button>
          <div className="office-footer">
            <span>
              <LocationOnIcon />
              المدينة{" "}
            </span>
            <span>الرياض</span>
          </div>
        </article>
      </section>
    </OfficesContainer>
  );
};

export default Offices;
