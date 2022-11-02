import { useCallback } from "react";
import styles from "./Switch.module.scss";

export const Switch = ({ text, toggleState }) => {
  const [toggle, setToggle] = toggleState;

  const handleToggle = useCallback(() => {
    setToggle(!toggle);
  }, [setToggle, toggle]);

  return (
    <div className={styles.switchWrapper} onClick={handleToggle}>
      <div className={`${styles.switch} ${toggle ? styles.on : styles.off}`}>
        <div className={styles.switchDot} />
      </div>
      <label>{text}</label>
    </div>
  );
};
