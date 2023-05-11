"use client";
import React from "react";
import classes from "./Main.module.scss";
import { Button } from "antd";

function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className={classes["section-main"]}>
      <section className={classes["section-header"]}>
        <div className={classes["section-header-content"]}>
          <h2>project scope recap</h2>
          <div className={classes["mutual-action"]}>
            <p>Mutual action plan</p>
            <p>bar</p>
          </div>
        </div>
        <div className={classes["section-btns"]}>
          <Button>basic info</Button>
          <Button>files</Button>
          <Button>mutual action plan</Button>
          <Button>contact</Button>
          <Button className={classes["btn-internal"]}>Internal Actions</Button>
        </div>
      </section>
      <nav className={classes["nav-sidebar"]}>
        <h3>overview</h3>
        <ul className={classes["nav-list"]}>
          <li>welcome</li>
          <li>product capabilities</li>
          <li>customer success stories</li>
          <li>file sharing</li>
          <li>our desk</li>
        </ul>
      </nav>
      {children}
    </main>
  );
}

export default Main;
