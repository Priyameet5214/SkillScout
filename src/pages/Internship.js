import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Internship.module.css";

const Internship = () => {
  const navigate = useNavigate();

  const onAboutTextClick = useCallback(() => {
    navigate("/top-page");
  }, [navigate]);

  const onAnalyticsTextClick = useCallback(() => {
    navigate("/analytics");
  }, [navigate]);

  const onCertificateTextClick = useCallback(() => {
    navigate("/certificate");
  }, [navigate]);

  return (
    <div className={styles.internship}>
      <div className={styles.aboutParent}>
        <b className={styles.about} onClick={onAboutTextClick}>
          About
        </b>
        <b className={styles.analytics} onClick={onAnalyticsTextClick}>
          Analytics
        </b>
        <b className={styles.internship1}>Internship</b>
        <b className={styles.certificate} onClick={onCertificateTextClick}>
          Certificate
        </b>
        <img className={styles.frameChild} alt="" src="../group-6.svg" />
        <img className={styles.frameItem} alt="" src="../frame-412.svg" />
      </div>
      <div className={styles.associateProductManager}>
        Associate Product Manager Internship
      </div>
      <div className={styles.mumbai}>Mumbai</div>
      <div className={styles.hr}>$16.86 / hr</div>
      <div className={styles.ourInternsBridgeContainer}>
        <p className={styles.ourInternsBridge}>
          Our Interns Bridge Technical and Business worlds , designing
          technology with Engineers and then zooming out OT LEAD MATRIX teams
          such as sales , Marketing and Finance , to name a few.
        </p>
        <p className={styles.theInternshipIs}>
          The internship is available globally , with varying requirements and
          application dates .
        </p>
      </div>
      <div className={styles.unsplashfpzzev0uqwaWrapper}>
        <img
          className={styles.unsplashfpzzev0uqwaIcon}
          alt=""
          src="../unsplashfpzzev0uqwa@2x.png"
        />
      </div>
      <img className={styles.vectorIcon} alt="" src="../vector.svg" />
      <img className={styles.groupIcon} alt="" src="../group.svg" />
      <img className={styles.logosgoogleIcon} alt="" src="../logosgoogle.svg" />
    </div>
  );
};

export default Internship;
