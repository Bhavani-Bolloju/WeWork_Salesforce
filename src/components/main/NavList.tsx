import React from "react";
import Link from "next/link";
import classes from "./NavList.module.scss";
import { usePathname } from "next/navigation";
function NavList() {
  const pathname = usePathname();
  return (
    <ul className={classes["nav-links"]}>
      <li className={classes["nav-items"]}>
        <Link href="/" className={classes[pathname == "/" ? "active" : ""]}>
          basic info
        </Link>
      </li>
      <li className={classes["nav-items"]}>
        <Link
          href="/files"
          className={classes[pathname == "/files" ? "active" : ""]}
        >
          files
        </Link>
      </li>
      <li className={classes["nav-items"]}>
        <Link
          href="/mutual-action-plan"
          className={classes[pathname == "/mutual-action-plan" ? "active" : ""]}
        >
          mutual action plan
        </Link>
      </li>
      <li className={classes["nav-items"]}>
        <Link
          href="/contact"
          className={classes[pathname == "/contact" ? "active" : ""]}
        >
          contact
        </Link>
      </li>
      <li className={`${classes["nav-items"]} ${classes["internal-actions"]}`}>
        <Link
          href="/internal-actions"
          className={classes[pathname == "/internal-actions" ? "active" : ""]}
        >
          Internal Actions
        </Link>
      </li>
    </ul>
  );
}

export default NavList;
