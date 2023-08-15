import { OfficesContainer } from "../../styledComponents/OfficesStyles";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import NoteAddOutlinedIcon from "@mui/icons-material/NoteAddOutlined";
import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { SpecialAds } from "../../components";
import useDataFetcher from "../../api/useDataFetcher ";
import PaginationAds from "../../components/Filter/PaginationAds";
const Offices = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const [rating, setRating] = useState(700);
  const nav = useNavigate();
  const [per_page, set_per_page] = useState();
  const [current_page, set_current_page] = useState();
  const [ads, setAds] = useState([]);
  const [last_page, set_last_page] = useState();
  const { data, isLoading, get } = useDataFetcher();
  useEffect(() => {
    get(
      `/api/ads/get_all_ads?page=${current_page}`
      // &category_id=${adInfo.category_aqar.id}
    );
  }, [current_page]);

  useEffect(() => {
    if (data) {
      set_current_page(data.ads.current_page);
      set_per_page(data.ads.per_page);
      setAds(data.ads.data);
      set_last_page(data.ads.last_page);
    }
  }, [data]);

  const handlePageChange = (event, new_page) => {
    set_current_page(new_page);
  };

  return (
    <>
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
      {/* similar ads */}
      <Box>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            marginTop: "2rem",
            fontSize: { xs: "1.5rem", md: "2rem" },
          }}
        >
          {t("details_page.similer_sec_title")}
        </Typography>
        <Box>
          {ads.map((ad, i) => (
            <SpecialAds key={ad.id} ad={ad} />
          ))}
        </Box>
        {isLoading ? (
          ""
        ) : (
          <PaginationAds
            handlePageChange={handlePageChange}
            current_page={current_page}
            per_page={per_page}
            last_page={last_page}
          />
        )}
      </Box>
    </>
  );
};

export default Offices;
