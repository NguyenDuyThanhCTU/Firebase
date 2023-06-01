import React from "react";
import Header from "../components/FrontEnd/Header";
import Footer from "../components/FrontEnd/Footer";
const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default DefaultLayout;
