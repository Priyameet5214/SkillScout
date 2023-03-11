import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Certificate1.module.css";

const Certificate1 = () => {
  const navigate = useNavigate();

  const onAboutTextClick = useCallback(() => {
    navigate("/top-page");
  }, [navigate]);

  const onAnalyticsTextClick = useCallback(() => {
    navigate("/analytics");
  }, [navigate]);

  const onInternshipTextClick = useCallback(() => {
    navigate("/internship");
  }, [navigate]);

  const onFrameContainer2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFrameContainer4Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFrameContainer6Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFrameContainer8Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFrameContainer10Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFrameContainer12Click = useCallback(() => {
    navigate("/");
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
        <img className={styles.frameChild} alt="" src="../group-61.svg" />
        <img className={styles.frameItem} alt="" src="../frame-411.svg" />
      </div>
      <div className={styles.frameParent} onClick={onFrameContainer2Click}>
        <div className={styles.logoWrapper}>
          <div className={styles.logo}>LOGO</div>
        </div>
        <div className={styles.certificateName}>Certificate Name</div>
        <div className={styles.loremIpsumDolor}>
          Lorem ipsum dolor sit amet consectetur. Nunc libero amet quis non .
        </div>
        <div className={styles.level}>Level</div>
        <div className={styles.frameInner} />
        <div className={styles.category}>Category</div>
        <div className={styles.frameDiv} />
      </div>
      <div className={styles.frameGroup} onClick={onFrameContainer4Click}>
        <div className={styles.logoWrapper}>
          <div className={styles.logo}>LOGO</div>
        </div>
        <div className={styles.certificateName}>Certificate Name</div>
        <div className={styles.loremIpsumDolor}>
          Lorem ipsum dolor sit amet consectetur. Nunc libero amet quis non .
        </div>
        <div className={styles.level}>Level</div>
        <div className={styles.frameInner} />
        <div className={styles.category}>Category</div>
        <div className={styles.frameDiv} />
      </div>
      <div className={styles.frameContainer} onClick={onFrameContainer6Click}>
        <div className={styles.logoWrapper}>
          <div className={styles.logo}>LOGO</div>
        </div>
        <div className={styles.certificateName}>Certificate Name</div>
        <div className={styles.loremIpsumDolor}>
          Lorem ipsum dolor sit amet consectetur. Nunc libero amet quis non .
        </div>
        <div className={styles.level}>Level</div>
        <div className={styles.frameInner} />
        <div className={styles.category}>Category</div>
        <div className={styles.frameDiv} />
      </div>
      <div className={styles.frameParent1} onClick={onFrameContainer8Click}>
        <div className={styles.logoWrapper}>
          <div className={styles.logo}>LOGO</div>
        </div>
        <div className={styles.certificateName}>Certificate Name</div>
        <div className={styles.loremIpsumDolor}>
          Lorem ipsum dolor sit amet consectetur. Nunc libero amet quis non .
        </div>
        <div className={styles.level}>Remote</div>
        <div className={styles.frameInner} />
        <div className={styles.category}>Category</div>
        <div className={styles.frameDiv} />
      </div>
      <div className={styles.frameParent2} onClick={onFrameContainer10Click}>
        <div className={styles.logoWrapper}>
          <div className={styles.logo}>LOGO</div>
        </div>
        <div className={styles.certificateName}>Certificate Name</div>
        <div className={styles.loremIpsumDolor}>
          Lorem ipsum dolor sit amet consectetur. Nunc libero amet quis non .
        </div>
        <div className={styles.level}>Remote</div>
        <div className={styles.frameInner} />
        <div className={styles.category}>Category</div>
        <div className={styles.frameDiv} />
      </div>
      <div className={styles.frameParent3} onClick={onFrameContainer12Click}>
        <div className={styles.logoWrapper}>
          <div className={styles.logo}>LOGO</div>
        </div>
        <div className={styles.certificateName}>Certificate Name</div>
        <div className={styles.loremIpsumDolor}>
          Lorem ipsum dolor sit amet consectetur. Nunc libero amet quis non .
        </div>
        <div className={styles.level}>Remote</div>
        <div className={styles.frameInner} />
        <div className={styles.category}>Category</div>
        <div className={styles.frameDiv} />
      </div>
    </div>
  );
};

export default Certificate1;
