import React from "react";
import Header from "../Components/FrontEnd/Header";
import Footer from "../Components/FrontEnd/Footer";
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
