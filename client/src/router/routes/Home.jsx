import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import NavBar from "../../components/navbar/NavBar";
import SessionEndAlert from "../../components/SessionEndAlert";

const Home = () => {
  return (
    <>
      <NavBar />
      <SessionEndAlert />
      <Outlet />
      <Footer />
    </>
  );
};

export default Home;
