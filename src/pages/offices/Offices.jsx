import { OfficesContainer } from "../../styledComponents/OfficesStyles";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import NoteAddOutlinedIcon from "@mui/icons-material/NoteAddOutlined";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Offices = () => {
  const [rating, setRating] = useState(700);
  const nav = useNavigate();

  return (
    <OfficesContainer dir="rtl">
      <h2>حميع المكاتب</h2>
      <header>
        <span>البحث بحسب المدينة</span>
        <form>
          <input type="text" placeholder="ادخل اسم المدينة" />
          <button>بحث</button>
        </form>
      </header>

      <section>
        <article>
          <div>
            <div className="office-header">
              <span>المكتب:</span>
              <span>
                التقييم:
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
            <NoteAddOutlinedIcon /> عرض الاعلانات
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
              <span>المكتب:</span>
              <span>
                التقييم:
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
            <NoteAddOutlinedIcon /> عرض الاعلانات
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
              <span>المكتب:</span>
              <span>
                التقييم:
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
            <NoteAddOutlinedIcon /> عرض الاعلانات
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
              <span>المكتب:</span>
              <span>
                التقييم:
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
            <NoteAddOutlinedIcon /> عرض الاعلانات
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
              <span>المكتب:</span>
              <span>
                التقييم:
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
            <NoteAddOutlinedIcon /> عرض الاعلانات
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
