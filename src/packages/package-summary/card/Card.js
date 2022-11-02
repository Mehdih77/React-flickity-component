import styles from "../PackageSummary.module.scss";

//TODO: dynamic number count

export default function Card({ data }) {
  return (
    <div className={`${styles.card} ${styles.box}`}>
      <div className={styles.right}>
        {data.icon}
        <h6>{data.title}</h6>
        <span>{data.info}</span>
      </div>
      <div className={styles.left}>
        <span>{data.count}</span>
      </div>
    </div>
  );
}