// Module 1.
// ** TASK DESCRIPTION ** - https://react-fundamentals-tasks.vercel.app/docs/module-1/home-task/components#create-input-component

import React from "react";
import styles from "./styles.module.css";

export const Input = ({
  placeholderText,
  labelText,
  onChange,
  "data-testid": dataTestId,
}) => (
  <label className={styles.label}>
    {labelText}
    <input
      onChange={onChange}
      data-testid={dataTestId}
      placeholder={placeholderText}
      className={styles.input}
    />
  </label>
);
