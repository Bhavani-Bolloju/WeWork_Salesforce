"use client";
import React from "react";
import classes from "./Main.module.scss";
import { Badge } from "antd";
import { Progress } from "antd";

import { AiOutlineMessage, AiOutlineShareAlt } from "react-icons/ai";
import NavList from "./NavList";

function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className={classes["section-main"]}>
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
      <NavList />
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
          <AiOutlineMessage />
        </Badge>
        <AiOutlineShareAlt className={classes["share-icon"]} />
      </div>
    </main>
  );
}

export default Main;
