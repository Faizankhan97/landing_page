import React from "react";
import Header from "../../component/header/header";
import MainBanner from "../../component/mainBanner/MainBanner";
import AppInterface from "../../component/appInterface/AppInterface";
import InfoDetail from "../../component/infoDetail/InfoDetail";
import Footer from "../../component/footer/Footer";

const home = () => {
  return (
    <main className="main">
      <Header />
      <MainBanner />
      <AppInterface />
      <InfoDetail />
      <Footer />
    </main>
  );
};

export default home;
