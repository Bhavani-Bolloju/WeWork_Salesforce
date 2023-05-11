import React from "react";

import {
  HiOutlineInbox,
  HiOutlineSearch,
  HiOutlineBell,
  HiOutlineQuestionMarkCircle,
  HiOutlineChevronRight
} from "react-icons/hi";

import { Badge } from "antd";

import image from "../assets/user.jpg";
import classes from "./Navigation.module.scss";

function Navigation() {
  // console.log(image, "image");
  return (
    <nav className={classes["nav"]}>
      <div className={classes["nav-logo"]}></div>
      <HiOutlineChevronRight className={classes["nav-svg"]} />
      <ul className={classes["nav-list"]}>
        <li>
          <HiOutlineSearch />
        </li>
        <li>
          <HiOutlineInbox />
        </li>
        <li className={classes["notification"]}>
          <HiOutlineBell />
          <span className={classes["notification-badge"]}>10</span>

          {/* <Badge count={5} style={{ fontSize: "10px" }}>
       <HiOutlineBell />
        </Badge> */}
        </li>
        <li>
          <HiOutlineQuestionMarkCircle />
        </li>
      </ul>
      <div className={classes["user"]}>
        <img src={image.src} alt="user-profile" />
      </div>
    </nav>
  );
}

export default Navigation;
