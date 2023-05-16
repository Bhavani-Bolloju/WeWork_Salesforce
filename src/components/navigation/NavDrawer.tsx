import React from "react";
import { Drawer, Badge } from "antd";
import classes from "./NavDrawer.module.scss";
import {
  HiOutlineInbox,
  HiOutlineSearch,
  HiOutlineBell,
  HiOutlineQuestionMarkCircle,
  HiOutlineChevronRight
} from "react-icons/hi";

import image from "../../assets/user.jpg";
type drawer = {
  onClose: () => void;
  open: boolean;
};

function NavDrawer(props: drawer) {
  return (
    <Drawer
      title="Basic Drawer"
      placement="right"
      onClose={props.onClose}
      open={props.open}
      width="100%"
      className={classes["my-drawer"]}
    >
      <div className={classes["drawer-content"]}>
        <div className={classes["drawer-user"]}>
          <img src={image.src} alt="user image" />
          <div className={classes["drawer-user-name"]}>
            <span>jane smith</span>
            <span>sales executive</span>
          </div>
        </div>
        <ul className={classes["drawer-content-list"]}>
          <li>
            <HiOutlineSearch />
            <span>search</span>
          </li>
          <li>
            <HiOutlineInbox />
            <span>inbox</span>
          </li>
          <li>
            <Badge count={2} className={classes["badge"]}>
              <HiOutlineBell />
            </Badge>
            <span>notifications</span>
          </li>
          <li>
            <HiOutlineQuestionMarkCircle />
            <span>help</span>
          </li>
        </ul>
      </div>
    </Drawer>
  );
}

export default NavDrawer;
