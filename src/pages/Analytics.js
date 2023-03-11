import { useCallback } from "react";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./Analytics.module.css";

const Analytics = () => {
  const navigate = useNavigate();

  const onAboutTextClick = useCallback(() => {
    navigate("/top-page");
  }, [navigate]);

  const onInternshipTextClick = useCallback(() => {
    navigate("/internship");
  }, [navigate]);

  const onCertificateTextClick = useCallback(() => {
    navigate("/certificate");
  }, [navigate]);

  return (
    <div className={styles.analytics}>
      <img className={styles.analyticsChild} alt="" src="../group-1.svg" />
      <img className={styles.analyticsItem} alt="" src="../group-2.svg" />
      <div className={styles.aboutParent}>
        <b className={styles.about} onClick={onAboutTextClick}>
          About
        </b>
        <b className={styles.analytics1}>Analytics</b>
        <b className={styles.internship} onClick={onInternshipTextClick}>
          Internship
        </b>
        <b className={styles.certificate} onClick={onCertificateTextClick}>
          Certificate
        </b>
        <img className={styles.frameChild} alt="" src="../group-64.svg" />
        <img className={styles.frameItem} alt="" src="../frame-414.svg" />
      </div>
      <b className={styles.topInternship}>Top Internship</b>
      <b className={styles.topCertification}>Top Certification</b>
      <div className={styles.groupParent}>
        <div className={styles.dashboardWrapper}>
          <b className={styles.dashboard}>DashBoard</b>
        </div>
        <div className={styles.categoryWrapper}>
          <b className={styles.dashboard}>Category</b>
        </div>
        <TextField
          className={styles.frameInner}
          sx={{ width: 174 }}
          color="primary"
          variant="filled"
          multiline
          label="Enter category"
          placeholder="Textarea placeholder"
          margin="none"
        />
      </div>
      <div className={styles.amazonWebServices}>
        Amazon Web Services (AWS) Solutions Architect - Associate
      </div>
      <div className={styles.ibmCertifiedTechnical}>
        IBM Certified Technical Advocate - Cloud v3
      </div>
      <div className={styles.dataInternRole}>
        data intern role (data science/ data analysis/ data engineering)
      </div>
      <div className={styles.seniorApplicationSupport}>
        senior application support engineer
      </div>
      <div className={styles.metaCloudComputing}>meta- cloud computing</div>
      <div className={styles.awsFundamentals}>aws fundamentals</div>
    </div>
  );
};

export default Analytics;
