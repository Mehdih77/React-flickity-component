import { useEffect } from "react";
import Flickity from "react-flickity-component";
import PackageCard from "./packageCard/PackageCard";
import styles from "./Slider.module.scss";

const flickityOptions = {
  cellAlign: "right",
  rightToLeft: true,
  pageDots: false,
  groupCells: true,
  dragThreshold: 10,
};

export default function Slider({ data, setHasData }) {
  // check has data for showing slider progess-bar
  useEffect(() => {
    if (data?.length) {
      setHasData(true);
    }
    return () => {
      setHasData(false);
    };
  }, [data, setHasData]);

  return (
    <div className={styles.sliderWrapper}>
      <Flickity className="flickity-carousel" options={flickityOptions}>
        {data.map((item) => (
          <PackageCard key={item.id} data={item} />
        ))}
      </Flickity>
    </div>
  );
}
