import React from "react";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import Catalogue from "./Catalogue";
import Reviews from "./Reviews";
import Tools from "./Tools";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Tools></Tools>
      <BusinessSummary></BusinessSummary>
      <Reviews></Reviews>
      <Catalogue></Catalogue>
    </div>
  );
};

export default Home;
