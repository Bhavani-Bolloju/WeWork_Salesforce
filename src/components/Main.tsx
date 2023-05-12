"use client";
import React from "react";
import classes from "./Main.module.scss";
import { MessageOutlined, ShareAltOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import { Progress } from "antd";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

function Main({ children }: { children: React.ReactNode }) {
  const { push } = useRouter();
  const pathname = usePathname();
  return (
    <main className={classes["section-main"]}>
      <section className={classes["section-header"]}>
        <div className={classes["section-header-content"]}>
          <h2>project scope recap</h2>
          <div className={classes["action-plan"]}>
            <p className={classes["action-plan-content"]}>
              <span className={classes["action-plan-text"]}>
                Mutual action plan
              </span>
              <span className={classes["action-plan-percent"]}>3%</span>
            </p>
            <Progress steps={17} percent={3} />
          </div>
        </div>
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
              className={
                classes[pathname == "/mutual-action-plan" ? "active" : ""]
              }
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
          <li
            className={`${classes["nav-items"]} ${classes["internal-actions"]}`}
          >
            <Link
              href="/internal-actions"
              className={
                classes[pathname == "/internal-actions" ? "active" : ""]
              }
            >
              Internal Actions
            </Link>
          </li>
        </ul>
      </section>
      <nav className={classes["nav-sidebar"]}>
        <h3>overview</h3>
        <ul className={classes["nav-sidebar-list"]}>
          <li>welcome</li>
          <li>product capabilities</li>
          <li>customer success stories</li>
          <li>file sharing</li>
          <li>our desk</li>
        </ul>
      </nav>
      {children}
      <div className={classes["section-footer"]}>
        <Badge count={5} style={{ fontSize: "10px" }}>
          <MessageOutlined />
        </Badge>
        <ShareAltOutlined className={classes["share-icon"]} />
      </div>
    </main>
  );
}

export default Main;
