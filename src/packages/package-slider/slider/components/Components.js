import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import styles from "./Components.module.scss";
// icons
import { ReactComponent as ArrowIcon } from "assets/images/icons/arrow.svg";
import { ReactComponent as TrashIcon } from "assets/images/icons/trash-gray.svg";

export const CardDivider = ({ position, fill, isModal }) => (
  <div
    className={`${isModal ? styles.modalDivider : styles.divider} ${
      styles[position]
    }`}>
    <div className={styles.imageWrapper}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="336"
        height="2"
        viewBox="0 0 336 2"
        fill={fill}>
        <line
          opacity="0.9"
          x1="1"
          y1="1"
          x2="335"
          y2="1"
          stroke={fill}
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="7 7"
        />
      </svg>
    </div>
  </div>
);

export const FeatureInput = ({ data, handleRemove, ...textareaProps }) => {
  return (
    <div className={styles.featureInput}>
      <textarea placeholder="متن ویژگی بسته" {...textareaProps} />
      <button onClick={handleRemove}>
        <TrashIcon />
      </button>
    </div>
  );
};

export const InputWithUnit = ({ units, unitState, ...inputProps }) => {
  const [isToggled, setIsToggled] = useState(false);
  const [selectedUnit, setSelectedUnit] = unitState;

  return (
    <div className={styles.inputWrapper}>
      <input type="number" {...inputProps} />

      <Dropdown
        className={styles.dropdown}
        show={isToggled}
        onToggle={(e) => setIsToggled(e)}>
        <Dropdown.Toggle
          className={`${styles.toggle} ${
            isToggled ? styles.open : styles.closed
          }`}>
          {selectedUnit?.name}
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
