"use client";

import React from "react";
import classes from "./Header.module.scss";
import { Button } from "antd";
import wework from "../../assets/wework.png";
import saleforce from "../../assets/saleforce.png";
import Image from "next/image";

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
        <Image
          src={wework.src}
          className={classes["wework"]}
          alt="wework picture"
          width={70}
          height={70}
        />
        <span className={classes["plus"]}>+</span>
        <Image
          src={saleforce.src}
          className={classes["saleforce"]}
          alt="salesforce picture"
          width={80}
          height={80}
        />
      </div>
    </header>
  );
}

export default Header;
