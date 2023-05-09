import "./globals.scss";
import { Figtree } from "next/font/google";

const figtree = Figtree({ subsets: ["latin"] });
import Navigation from "@/components/Navigation";
import Header from "@/components/Header";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={figtree.className}>
        <Navigation />
        <Header />
        {children}
      </body>
    </html>
  );
}
