import { OfficeContainer } from "../../styledComponents/OfficeSyles";
import StarIcon from "@mui/icons-material/Star";
import CallIcon from "@mui/icons-material/Call";
const Office = () => {
  return (
    <OfficeContainer dir="rtl">
      <main>
        <div className="logo">
          <img src="../logo.png" alt="" />
        </div>
        <h2 className="office-name"> مؤسسة تعميد للاستشارات العقارية </h2>
        <div className="stars">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <span>(120)</span>
        </div>
        <div>
          <span>
            تاريخ الانضمام: <span> 22/ 7/ 2022 </span>
          </span>
        </div>
        <div>
          رقم المعلن في الهيئة العامة للعقار: 271050 تويتر : daleelre انستقرام:
          daleelre الموقع ا
        </div>
        <button>
          <span>اظهار رقم الهاتف</span>
          <CallIcon />
        </button>
        <div className="specialities">
          <span className="speciality">
            <img src="/Alarm.svg" alt="" className="icon" />
            <span>قبل ساعة</span>
          </span>
          <span className="speciality">
            <img src="/subscribed-2.svg" alt="" className="icon" />
            <span>عقاري متميز</span>
          </span>
        </div>
      </main>
    </OfficeContainer>
  );
};

export default Office;
