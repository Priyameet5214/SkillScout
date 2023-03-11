import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./TopPage1.module.css";

const TopPage1 = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/top-page2");
  }, [navigate]);

  const onAnalyticsTextClick = useCallback(() => {
    navigate("/analytics");
  }, [navigate]);

  const onInternshipTextClick = useCallback(() => {
    navigate("/internship");
  }, [navigate]);

  const onCertificateTextClick = useCallback(() => {
    navigate("/certificate");
  }, [navigate]);

  return (
    <div className={styles.topPage}>
      <div className={styles.skillScout}>Skill Scout</div>
      <Button
        className={styles.topPageChild}
        sx={{ width: 174 }}
        variant="outlined"
        color="primary"
        onClick={onFrameButtonClick}
      >
        Explore
      </Button>
      <img className={styles.topPageItem} alt="" src="../ellipse-11.svg" />
      <div className={styles.aboutParent}>
        <b className={styles.about}>About</b>
        <b className={styles.analytics} onClick={onAnalyticsTextClick}>
          Analytics
        </b>
        <b className={styles.internship} onClick={onInternshipTextClick}>
          Internship
        </b>
        <b className={styles.certificate} onClick={onCertificateTextClick}>
          Certificate
        </b>
        <img className={styles.frameChild} alt="" src="../group-67.svg" />
        <img className={styles.frameItem} alt="" src="../frame-416.svg" />
      </div>
      <img
        className={styles.business0011Icon}
        alt=""
        src="../business-0011@2x.png"
      />
      <div className={styles.aScoutingSoftware}>
        A scouting software providing you with internships as well as
        certifications and training of your personal favorite skill
      </div>
    </div>
  );
};

export default TopPage1;
