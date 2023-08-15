import React from "react";
import { BgVideo } from "../../assets";
import styles from "./undermaintence.module.css";

const UnderMaintence = () => {
  return (
    <>
      <video autoPlay muted controls className={styles.video_Style}>
        <source src={BgVideo} type="video/mp4" />
      </video>
      <div className={styles.div_video_style}>
        <div className={styles.div_video_content}>
          <h1 className={styles.heading1}>Soon back </h1>
          <h1 className={styles.heading2}>ستارتك العقاري</h1>
          <h5 className={styles.under_maintece}>
            المنصة قيد التطوير نعتذر لازعاجكم
          </h5>
          <h5 className={styles.under_maintece} style={{ marginTop: "3rem" }}>
            تطوير ستارتك
          </h5>
          <p className={styles.programming}>
            Programming:
            <a href="/" style={{ color: "#BCA53B", marginLeft: "10px" }}>
              sta.sa
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default UnderMaintence;
