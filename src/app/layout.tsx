// "use client";

import localFont from "next/font/local";

import Header from "@/components/header/Header";
import Main from "@/components/main/Main";
import Navigation from "@/components/navigation/Navigation";
import { Metadata } from "next";

import "../styles/globals.scss";

const proximaNova = localFont({
  src: [
    {
      path: "./fonts/proxima_reg-webfont.ttf",
      weight: "400",
      style: "normal"
    },
    {
      path: "./fonts/Proxima-Bold.ttf",
      weight: "700",
      style: "normal"
    },
    {
      path: "./fonts/Proxima-Extrabold.ttf",
      weight: "800",
      style: "normal"
    },
    {
      path: "./fonts/Proxima-Black.ttf",
      weight: "900",
      style: "normal"
    }
  ],
  variable: "--proxima-nova"
});

export const metadata: Metadata = {
  title: "WeWork + Salesforce",
  description: "For all the ways you work, we are here"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={proximaNova.variable}>
      <body className="text">
        <Navigation />
        <Header />
        <Main>{children}</Main>
      </body>
    </html>
  );
}
