import React from "react";
import logo from "../../../../assets/logo.svg";
import styles from "./styles.module.css";

// Module 1:
// * add logo.svg as a logo image
// ** TASK DESCRIPTION ** - https://react-fundamentals-tasks.vercel.app/docs/module-1/home-task/components#logo-component

export const Logo = () => <img src={logo} className={styles.logo} alt="logo" />;
