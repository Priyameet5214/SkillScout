import { useCallback } from "react";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./TopPage.module.css";

const TopPage = () => {
  const navigate = useNavigate();

  const onTopPageContainerClick = useCallback(() => {
    navigate("/top-page");
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
    <div className={styles.topPage} onClick={onTopPageContainerClick}>
      <div className={styles.skillScout}>Skill Scout</div>
      <TextField
        className={styles.topPageChild}
        sx={{ width: 415 }}
        color="primary"
        variant="outlined"
        type="text"
        label="Search"
        placeholder="Placeholder"
        size="medium"
        margin="none"
      />
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
        <img className={styles.frameChild} alt="" src="../group-66.svg" />
        <img className={styles.frameItem} alt="" src="../frame-415.svg" />
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

export default TopPage;
