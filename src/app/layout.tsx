import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import classNames from "./utils/classNames";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Red Flag",
  description: "Manage and update feature flage and user segments.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-white">
      <body className={classNames(inter.className, "h-full")}>{children}</body>
    </html>
  );
}
