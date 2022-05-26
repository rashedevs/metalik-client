import React from "react";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import Catalogue from "./Catalogue";
import Gallary from "./Gallary";
import Reviews from "./Reviews";
import Tools from "./Tools";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Tools></Tools>
      <BusinessSummary></BusinessSummary>
      <Reviews></Reviews>
      <Gallary></Gallary>
      <Catalogue></Catalogue>
    </div>
  );
};

export default Home;
