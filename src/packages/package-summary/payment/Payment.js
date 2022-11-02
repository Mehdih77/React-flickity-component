import { ReactComponent as AddIcon } from "assets/images/icons/add-square-gray.svg";
import styles from "../PackageSummary.module.scss";

export default function Payment() {
  return (
    <div className={`${styles.payment} ${styles.box}`}>
      <AddIcon />
      <span>افزودن درگاه پرداخت</span>
    </div>
  );
}
