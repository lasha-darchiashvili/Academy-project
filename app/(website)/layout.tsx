// import { Inter } from "next/font/google";
import "../globals.css";
import Header from "./_components/header";
import Footer from "./_components/footer";
// import { cookies } from "next/headers";
// import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
