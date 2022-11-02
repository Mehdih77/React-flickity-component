import { PackagesSummary } from "constants/packages/Packages.constant";
import Card from "./card/Card";
import Payment from "./payment/Payment";
import styles from "./PackageSummary.module.scss";

export default function PackageSummary() {
  return (
    <div className={styles.wrapper}>
      {PackagesSummary.map((item) => (
        <Card key={item.id} data={item} />
      ))}
      <Payment />
    </div>
  );
}
