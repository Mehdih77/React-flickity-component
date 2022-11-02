import { useState, useEffect } from "react";
import { TabPanel } from "react-tabs";
import { PackagesTab } from "constants/packages/Packages.constant";
import { Modal } from "react-bootstrap";
import { packagesMockData } from "constants/mock-data/packages.moke";
import Flickity from "flickity";
import PackageModal from "./slider/packageModal/PackageModal";
import CustomTabs from "components/tabs/CustomTabs";
import Slider from "./slider/Slider";
import { ReactComponent as AddIcon } from "assets/images/icons/add-square.svg";
import EmptyState from "components/empty-state/EmptyState";
import styles from "./PackageSlider.module.scss";

export default function PackageSlider() {
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState("all"); // all | active | inactive
  const [hasData, setHasData] = useState(false); // check has data for showing slider progess-bar

  // flickity progress bar
  useEffect(() => {
    if (hasData) {
      var flkty = new Flickity(".flickity-carousel");
      var progressBar = document.querySelector(".flickity-progress-bar");
      flkty.on("scroll", function (progress) {
        progress = Math.max(0, Math.min(1, progress));
        progressBar.style.width = progress * 100 + "%";
      });
    }
  }, [activeTab, hasData]);

  return (
    <>
      <div className={styles.container}>
        <CustomTabs setState={setActiveTab} tabs={PackagesTab}>
          <TabPanel>
            <Slider setHasData={setHasData} data={packagesMockData} />
          </TabPanel>
          <TabPanel>
            <EmptyState />
          </TabPanel>
          <TabPanel>
            <Slider setHasData={setHasData} data={packagesMockData} />
          </TabPanel>
        </CustomTabs>
        {hasData && (
          <div className={`${styles.progressBar}`}>
            <span className="flickity-progress-bar"></span>
          </div>
        )}

        <div
          onClick={() => setShowModal(true)}
          className={styles.addPackageBtn}>
          <AddIcon />
          افزودن بسته جدید
        </div>
      </div>
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        dialogClassName={styles.editModal}>
        <PackageModal onHide={() => setShowModal(false)} />
      </Modal>
    </>
  );
}
