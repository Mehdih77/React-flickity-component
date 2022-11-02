import { NavLink } from "react-router-dom";
import { useLocation } from "react-router";
import { Icon } from "components/Icon/Icon";
import { sideMenuRoutes } from "constants/routes/SideMenuRoutes.constant";
import styles from "../SideMenu.module.scss";

function Menu() {
  const { pathname } = useLocation();

  return (
    <>
      {sideMenuRoutes.map((item) => (
        <li key={item.id} className={styles.listItem}>
          <NavLink
            to={item.link}
            className={({ isActive }) => (isActive ? styles.active : "")}>
            <span
              className={
                pathname.includes(`${item.link}`) ? styles.logoActive : ""
              }>
              <Icon>{item.icon}</Icon>
            </span>
            <span className={styles.text}>{item.title}</span>
          </NavLink>
        </li>
      ))}
    </>
  );
}

export default Menu;
