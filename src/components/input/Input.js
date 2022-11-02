import { useState } from "react";
import { ReactComponent as EyeIcon } from "assets/images/icons/eye.svg";
import PropTypes from "prop-types";
import styles from "./Input.module.scss";

export default function Input({ type, hasIcon, label, ...props }) {
  const [inputType, setInputType] = useState(type);
  const [isFocussed, setIsFocussed] = useState(false);
  const handleChangeInputType = () => {
    if (inputType === "password") setInputType("text");
    if (inputType === "text") setInputType("password");
  };

  return (
    <div className={styles.wrapper}>
      {label?.length && (
        <label
          htmlFor={label}
          className={`${styles.label} ${isFocussed ? styles.focusLabel : ""}`}>
          {label}
        </label>
      )}

      <input
        id={label}
        type={inputType}
        className={styles.input}
        onFocus={() => {
          setIsFocussed(true);
        }}
        onBlur={(e) => {
          !e.target.value && setIsFocussed(false);
        }}
        autoComplete="off"
        {...props}
      />

      {hasIcon && (
        <EyeIcon onClick={handleChangeInputType} className={styles.icon} />
      )}
    </div>
  );
}

Input.defaultProps = {
  //   theme: "dark",
  type: "text",
};

Input.propTypes = {
  //   theme: PropTypes.oneOf(["light", "dark", "white"]),
  type: PropTypes.string,
  hasIcon: PropTypes.bool,
  //   isRequired: PropTypes.bool,
};
