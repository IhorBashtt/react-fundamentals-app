import React from "react";
import styles from "./styles.module.css";

// Module 1:
// * use this component in components: Header, Courses
// ** TASK DESCRIPTION ** - https://react-fundamentals-tasks.vercel.app/docs/module-1/home-task/components#button-component

export const Button = ({
  buttonText,
  handleClick,
  "data-testid": dataTestId,
}) => (
  <button
    className={styles.button}
    data-testid={dataTestId}
    onClick={handleClick}
  >
    {buttonText}
  </button>
);
