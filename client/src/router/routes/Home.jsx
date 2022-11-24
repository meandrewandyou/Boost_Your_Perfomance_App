import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import NavBar from "../../components/navbar/NavBar";

const Home = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Home;
