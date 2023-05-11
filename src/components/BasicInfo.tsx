import React from "react";
import classes from "./BasicInfo.module.scss";
import weWork from "../assets/wework-title.png";
import logo from "../assets/wework-logo.png";
import { VscEyeClosed, VscArrowDown, VscTrash } from "react-icons/vsc";

function BasicInfo() {
  return (
    <section className={classes["section-basic-info"]}>
      <div className={classes["header"]}>
        <h2>Company Profile</h2>
        <div className={classes["header-icons"]}>
          <VscArrowDown />
          <VscEyeClosed />
          <VscTrash />
        </div>
      </div>
      <div className={classes["image"]}>
        <img src={weWork.src} alt="we work" />
        <div className={classes["info-heading"]}>
          <img src={logo.src} alt="we work logo" />
          <p className={classes["title"]}>
            For all the ways you work, we are here
          </p>
        </div>
      </div>
    </section>
  );
}

export default BasicInfo;
