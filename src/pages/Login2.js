import { useCallback } from "react";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./Login2.module.css";

const Login2 = () => {
  const navigate = useNavigate();

  const onRectangleButtonClick = useCallback(() => {
    //TODO: login//register
  }, []);

  const onFrameButtonClick = useCallback(() => {
    navigate("/top-page");
  }, [navigate]);

  return (
    <div className={styles.login}>
      <img className={styles.loginChild} alt="" src="../ellipse-1.svg" />
      <div className={styles.aboutParent}>
        <b className={styles.about}>About</b>
        <b className={styles.analytics}>Analytics</b>
        <b className={styles.internship}>Internship</b>
        <b className={styles.certificate}>Certificate</b>
        <img className={styles.frameChild} alt="" src="../group-65.svg" />
      </div>
      <form className={styles.rectangleParent}>
        <Button
          className={styles.frameItem}
          sx={{ width: 430 }}
          variant="outlined"
          color="primary"
          onClick={onRectangleButtonClick}
        >
          Button
        </Button>
        <b className={styles.login1}>Login</b>
        <div className={styles.usernameWrapper}>
          <TextField
            className={styles.username}
            color="primary"
            variant="outlined"
            type="text"
            label="Username"
            placeholder="Placeholder"
            size="medium"
            margin="none"
          />
        </div>
        <div className={styles.passwordWrapper}>
          <TextField
            className={styles.username}
            color="primary"
            variant="outlined"
            type="text"
            label="Password"
            placeholder="Placeholder"
            size="medium"
            margin="none"
          />
        </div>
        <b className={styles.forgotPasswordContainer}>
          <span className={styles.forgot}>{`Forgot `}</span>
          <span
            className={styles.passwordUsername}
          >{`Password / Username `}</span>
          <span className={styles.forgot}>?</span>
        </b>
        <Button
          className={styles.frameInner}
          sx={{ width: 173.694580078125 }}
          variant="outlined"
          color="primary"
          onClick={onFrameButtonClick}
        >{`Log in `}</Button>
        <div className={styles.signUpWithContainer}>
          <b className={styles.signUp}>sign up</b>
          <span className={styles.signUp}>{` with `}</span>
        </div>
        <div className={styles.lineDiv} />
        <div className={styles.frameChild1} />
        <div className={styles.frameDiv} />
        <img className={styles.frameIcon} alt="" src="../frame-39.svg" />
        <img className={styles.frameChild2} alt="" src="../frame-40.svg" />
        <img
          className={styles.flatColorIconsgoogle}
          alt=""
          src="../flatcoloriconsgoogle.svg"
        />
        <img className={styles.groupIcon} alt="" src="../group-5.svg" />
      </form>
    </div>
  );
};

export default Login2;
