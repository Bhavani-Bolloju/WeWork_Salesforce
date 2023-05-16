"use client";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Badge } from "antd";

import {
  HiOutlineInbox,
  HiOutlineSearch,
  HiOutlineBell,
  HiOutlineQuestionMarkCircle,
  HiOutlineChevronRight
} from "react-icons/hi";

import image from "../../assets/user.jpg";
import classes from "./Navigation.module.scss";
import NavDrawer from "./NavDrawer";

const User = function () {
  return (
    <div className={classes["user"]}>
      <img src={image.src} alt="user-profile" />
    </div>
  );
};

const NavItem = function ({ children }: { children: React.ReactNode }) {
  return <li className={classes["nav-item"]}>{children}</li>;
};

function Navigation() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <nav className={classes["nav"]}>
        <div className={classes["nav-logo"]}></div>
        <HiOutlineChevronRight className={classes["nav-svg"]} />
        <ul className={classes["nav-list"]}>
          <NavItem>
            <HiOutlineSearch />
          </NavItem>
          <NavItem>
            <HiOutlineInbox />
          </NavItem>
          <NavItem>
            <Badge count={9} className={classes["badge"]}>
              <HiOutlineBell />
            </Badge>
          </NavItem>
          <NavItem>
            <HiOutlineQuestionMarkCircle />
          </NavItem>
        </ul>
        <User />

        <RxHamburgerMenu
          className={classes["hamburger-icon"]}
          onClick={showDrawer}
        />
      </nav>

      {open && <NavDrawer onClose={onClose} open={open} />}
    </>
  );
}

export default Navigation;
