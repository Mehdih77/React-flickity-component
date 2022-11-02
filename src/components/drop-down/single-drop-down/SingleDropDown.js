import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { ReactComponent as ArrowIcon } from "assets/images/icons/arrow.svg";
import styles from "./SingleDropDown.module.scss";

export const SingleDropDown = ({ units, unitState }) => {
  const [isToggled, setIsToggled] = useState(false);
  const [selectedUnit, setSelectedUnit] = unitState;

  return (
    <div className={styles.inputWrapper}>
      <Dropdown
        className={styles.dropdown}
        show={isToggled}
        onToggle={(e) => setIsToggled(e)}>
        <Dropdown.Toggle
          className={`${styles.toggle} ${
            isToggled ? styles.open : styles.closed
          }`}>
          {selectedUnit ? (
            selectedUnit?.name
          ) : (
            <span className={styles.gray}>زمان بسته</span>
          )}
          <ArrowIcon />
        </Dropdown.Toggle>
        <Dropdown.Menu className={styles.menu}>
          {units.map((item) => (
            <Dropdown.Item
              as="div"
              key={item.id}
              onClick={() => setSelectedUnit(item)}>
              {item.name}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};