import React from "react";
import classes from "./BasicInfo.module.scss";

import {
  VscEyeClosed,
  VscArrowDown,
  VscTrash,
  VscFilePdf,
  VscZoomIn,
  VscZoomOut
} from "react-icons/vsc";
import { TfiDownload } from "react-icons/tfi";
import { MdOutlineOpenInNew } from "react-icons/md";
import Image from "next/image";

import weWork from "../../assets/wework-title.png";
import logo from "../../assets/wework-logo.png";

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
        <Image src={weWork.src} alt="we work" width={100} height={100} />
        <div className={classes["info-heading"]}>
          <Image src={logo.src} alt="we work logo" width={100} height={100} />
          <p className={classes["title"]}>
            For all the ways you work, we are here
          </p>
        </div>
        <div className={classes["image-controls"]}>
          <div className={classes["pdf-icon"]}>
            <VscFilePdf />
            <span>1/15</span>
          </div>
          <TfiDownload />
          <VscZoomIn />
          <VscZoomOut />
          <MdOutlineOpenInNew />
        </div>
      </div>
    </section>
  );
}

export default BasicInfo;
