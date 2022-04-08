import React from "react";
import Header from "../components/header/Header";
import Market from "../components/market/Market";
import BottomNav from "../components/navbar/BottomNav";
import TopNavbar from "../components/navbar/TopNavbar";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <TopNavbar />
      <BottomNav />
      <Header />
      <Market />
    </div>
  );
};

export default Home;
