import React from "react";
import { Header } from "./Header";
import { Footer } from "./footer";
import { Sidebar } from "./sidebar";

export const Dashboard = () => {
  return (
    <>
      <Header></Header>
      <Sidebar></Sidebar>
      <Footer></Footer>
    </>
  );
};
