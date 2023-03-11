import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  const navigate = useNavigate();

  const onGroupClick = useCallback(() => {
    navigate("/top-page1");
  }, [navigate]);

  return (
    <div className={styles.login}>
      <img
        className={styles.loginChild}
        alt=""
        src="../group-7.svg"
        onClick={onGroupClick}
      />
    </div>
  );
};

export default Login;
