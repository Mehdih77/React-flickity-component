import { ReactComponent as CloseIcon } from "assets/images/icons/cross.svg";
import styles from "./CloseButton.module.scss";

export default function CloseButton({ onHide }) {
  return (
    <div className={`${styles.close}`} onClick={onHide}>
      <CloseIcon />
    </div>
  );
}