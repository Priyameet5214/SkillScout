import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Internship1.module.css";

const Internship1 = () => {
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

  const onFrameContainer1Click = useCallback(() => {
    navigate("/internship1");
  }, [navigate]);

  const onFrameContainer2Click = useCallback(() => {
    navigate("/internship1");
  }, [navigate]);

  const onFrameContainer3Click = useCallback(() => {
    navigate("/internship1");
  }, [navigate]);

  const onFrameContainer4Click = useCallback(() => {
    navigate("/internship1");
  }, [navigate]);

  const onFrameContainer5Click = useCallback(() => {
    navigate("/internship1");
  }, [navigate]);

  const onFrameContainer6Click = useCallback(() => {
    navigate("/internship1");
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
        <img className={styles.frameChild} alt="" src="../group-61.svg" />
        <img className={styles.frameItem} alt="" src="../frame-413.svg" />
      </div>
      <div className={styles.frameParent} onClick={onFrameContainer1Click}>
        <div className={styles.frameInner} />
        <div className={styles.microsoft}>Microsoft</div>
        <div className={styles.loremIpsumDolor}>
          Lorem ipsum dolor sit amet consectetur. Nunc libero amet quis non .
        </div>
        <div className={styles.remote}>Remote</div>
        <div className={styles.frameDiv} />
        <div className={styles.category}>Category</div>
        <div className={styles.frameChild1} />
      </div>
      <div className={styles.frameGroup} onClick={onFrameContainer2Click}>
        <div className={styles.frameInner} />
        <img className={styles.logosawsIcon} alt="" src="../logosaws.svg" />
        <div className={styles.microsoft}>Amazon</div>
        <div className={styles.loremIpsumDolor}>
          Lorem ipsum dolor sit amet consectetur. Nunc libero amet quis non .
        </div>
        <div className={styles.remote}>Remote</div>
        <div className={styles.frameDiv} />
        <div className={styles.category}>Category</div>
        <div className={styles.frameChild1} />
      </div>
      <div className={styles.frameContainer} onClick={onFrameContainer3Click}>
        <img className={styles.frameIcon} alt="" src="../frame-6.svg" />
        <div className={styles.microsoft}>Google</div>
        <div className={styles.loremIpsumDolor}>
          Lorem ipsum dolor sit amet consectetur. Nunc libero amet quis non .
        </div>
        <div className={styles.remote}>Remote</div>
        <div className={styles.frameDiv} />
        <div className={styles.category}>Category</div>
        <div className={styles.frameChild1} />
      </div>
      <div className={styles.frameParent1} onClick={onFrameContainer4Click}>
        <img className={styles.frameIcon} alt="" src="../frame-61.svg" />
        <div className={styles.microsoft}>Samsung</div>
        <div className={styles.loremIpsumDolor}>
          Lorem ipsum dolor sit amet consectetur. Nunc libero amet quis non .
        </div>
        <div className={styles.remote}>Remote</div>
        <div className={styles.frameDiv} />
        <div className={styles.category}>Category</div>
        <div className={styles.frameChild1} />
      </div>
      <div className={styles.frameParent2} onClick={onFrameContainer5Click}>
        <div className={styles.frameInner} />
        <div className={styles.microsoft}>Adobe</div>
        <div className={styles.loremIpsumDolor}>
          Lorem ipsum dolor sit amet consectetur. Nunc libero amet quis non .
        </div>
        <div className={styles.remote}>Remote</div>
        <div className={styles.frameDiv} />
        <div className={styles.category}>Category</div>
        <div className={styles.frameChild1} />
        <img className={styles.uiladobeIcon} alt="" src="../uiladobe.svg" />
      </div>
      <div className={styles.frameParent3} onClick={onFrameContainer6Click}>
        <img className={styles.frameIcon} alt="" src="../frame-62.svg" />
        <div className={styles.microsoft}>Cisco</div>
        <div className={styles.loremIpsumDolor}>
          Lorem ipsum dolor sit amet consectetur. Nunc libero amet quis non .
        </div>
        <div className={styles.remote}>Remote</div>
        <div className={styles.frameDiv} />
        <div className={styles.category}>Category</div>
        <div className={styles.frameChild1} />
      </div>
      <img
        className={styles.logosmicrosoftIcon}
        alt=""
        src="../logosmicrosoft.svg"
      />
    </div>
  );
};

export default Internship1;
