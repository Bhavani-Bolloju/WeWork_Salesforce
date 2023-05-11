import React from "react";
import classes from "./BasicInfo.module.scss";
import weWork from "../assets/wework-title.png";

function BasicInfo() {
  return (
    <section className={classes["section-basic-info"]}>
      <div className={classes["header"]}>
        <h2>Company Profile</h2>
        <div>icons</div>
      </div>
      <div className={classes["image"]}>
        <img src={weWork.src} alt="we work" />
        <div>
          <h3>WeWork</h3>
          <p>for all the ways you work, we are here</p>
        </div>
      </div>
    </section>
  );
}

export default BasicInfo;
