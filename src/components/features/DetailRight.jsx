import React from "react";
import styles from "../css_modules/Detail.module.css";

const DetailRight = () => {
  return (
    <>
      <div className={styles.rightList}>
        <iframe
          width="250"
          height="150"
          src="https://www.youtube.com/embed/JxS5E-kZc2s"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div className={styles.rightText}>
          <div>Baby Cats - Cute and Funny Baby Cat Videos Compilation</div>
          <div>Aww Animals</div>
        </div>
      </div>
      {/* dummyText */}
      <div className={styles.rightList}>
        <iframe
          width="250"
          height="150"
          src="https://www.youtube.com/embed/JxS5E-kZc2s"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div className={styles.rightText}>
          <div>Baby Cats - Cute and Funny Baby Cat Videos Compilation</div>
          <div>Aww Animals</div>
        </div>
      </div>
    </>
  );
};

export default DetailRight;
