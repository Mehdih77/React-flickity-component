import { Link } from "react-router-dom";
import { Scrollbars } from "rc-scrollbars";
import MainMenu from "./menu";
import styles from "./SideMenu.module.scss";
// icons
import { ReactComponent as Logout } from "assets/images/icons/logout.svg";
import { ReactComponent as Setting } from "assets/images/icons/setting.svg";
import { ReactComponent as Logo } from "assets/images/icons/streamer-logo.svg";

export default function SideMenu() {
  return (
    <aside className={styles.menuWrapper}>
      <div className={styles.header}>
        <div className={styles.topIcons}>
          <button className={`${styles.btn} btn`}>
            <Logout />
          </button>
          <Link to="/users" className={styles.btn}>
            <Setting />
          </Link>
        </div>
        <div className={styles.logWrapper}>
          <Logo className={`${styles.largeLogo}`} />
        </div>
      </div>

      <Scrollbars
        style={{ height: "calc(100vh - 350px)" }}
        autoHide
        hideTracksWhenNotNeeded>
        <ul className={styles.list}>
          <MainMenu />
        </ul>
      </Scrollbars>
    </aside>
  );
}
