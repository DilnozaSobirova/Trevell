import React from "react";
import Loader from "./components/loader/loader";
import Header from "./components/header/header";
import SwiperSlider from "./components/swiper/swiperSlider";
import Offers from "./components/offers/offers";
import Train from "./components/train/train";
import VisaSwiper from "./components/visaSwiper/visaSwiper";
import LocationCard from "./components/locationCard/locationCard";
import Book from "./components/book/book";
import Footer from "./components/footer/footer";
function App() {
  return (
    <div className="App">
      <>
        <Loader />
        <Header />
        <SwiperSlider />
        <Offers />
        <Train />
        <VisaSwiper />
        <Book />
        <LocationCard />
        <Footer />
      </>
    </div>
  );
}

export default App;
