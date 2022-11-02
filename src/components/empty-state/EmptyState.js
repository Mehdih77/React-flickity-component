import { ReactComponent as EmptyIcons } from "assets/images/icons/empty.svg";
import styles from "./EmptyState.module.scss";

// can make it a dynamic component

export default function EmptyState() {
  return (
    <div className={styles.wrapper}>
      <EmptyIcons />
      <span>شما هیچ بسته ای ندارید</span>
    </div>
  );
}