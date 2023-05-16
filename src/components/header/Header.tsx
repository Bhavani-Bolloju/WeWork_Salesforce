"use client";

import React from "react";
import classes from "./Header.module.scss";
import { Button } from "antd";
import wework from "../../assets/wework.png";
import saleforce from "../../assets/saleforce.png";

function Header() {
  return (
    <header className={classes.header}>
      <div className={classes["heading"]}>
        <h1>WeWork + Salesforce</h1>
        <Button type="primary" className={classes["header-btn"]}>
          Publish/Share
        </Button>
      </div>
      <div className={classes["header-image"]}>
        <span className={classes["header-image__text"]}>
          Workspace proposal
        </span>
      </div>
      <div className={classes["header-logo"]}>
        <img src={wework.src} className={classes["wework"]} alt="we work" />
        <span className={classes["plus"]}>+</span>
        <img
          src={saleforce.src}
          className={classes["saleforce"]}
          alt="sale force"
        />
      </div>
    </header>
  );
}

export default Header;
