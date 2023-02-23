import Footer from "components/footer/Footer";
import Header from "components/header/Header";
import { Outlet } from "react-router-dom";
import React from "react";

const LayoutPage = ({ children, className }) => {
  return (
    <>
      <div className={className}>
        <Header></Header>
        <div className="layout-main">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default LayoutPage;
