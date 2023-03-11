import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Certificate.module.css";

const Certificate = () => {
  const navigate = useNavigate();

  const onAboutTextClick = useCallback(() => {
    navigate("/top-page");
  }, [navigate]);

  const onAnalyticsTextClick = useCallback(() => {
    navigate("/analytics");
  }, [navigate]);

  const onInternshipTextClick = useCallback(() => {
    navigate("/analytics");
  }, [navigate]);

  return (
    <div className={styles.certificate}>
      <div className={styles.aboutParent}>
        <b className={styles.about} onClick={onAboutTextClick}>
          About
        </b>
        <b className={styles.analytics} onClick={onAnalyticsTextClick}>
          Analytics
        </b>
        <b className={styles.internship} onClick={onInternshipTextClick}>
          Internship
        </b>
        <b className={styles.certificate1}>Certificate</b>
        <img className={styles.frameChild} alt="" src="../group-6.svg" />
        <img className={styles.frameItem} alt="" src="../frame-41.svg" />
      </div>
      <div className={styles.logo}>LOGO</div>
      <div className={styles.certicateName}>Certicate Name</div>
      <div className={styles.loremIpsumDolor}>
        Lorem ipsum dolor sit amet consectetur. Non egestas amet amet amet eget
        cursus ac condimentum eget. Lacinia sit vel feugiat euismod. Mi bibendum
        nunc proin integer magna. Dolor nec ac gravida volutpat vel ut
        fermentum. Blandit porttitor arcu integer in vitae massa. Tristique nisi
        pulvinar arcu malesuada amet sit egestas pharetra. Vitae risus quam
        ornare natoque. Tincidunt leo vehicula augue magna egestas faucibus
        fames vel id. Velit mus massa sed sapien.
      </div>
      <div className={styles.certificateChild} />
    </div>
  );
};

export default Certificate;
