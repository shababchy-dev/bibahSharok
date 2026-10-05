import React from "react";
import HeroSection from "./components/HeroSection";


import PhotoGallery from "./components/PhotoGallery";
import GuestBook from "./components/GuestBook";
import Articles from "./components/Articles";
import Footer from "./components/Footer";
import CoupleProfile from "./components/CoupleProfile";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-rose-50 min-h-screen font-sans text-gray-800 w-full overflow-x-hiden ">
      <Navbar/>
      <HeroSection />
      <CoupleProfile />
      <Articles />
      {/* <EventSchedule /> */}
      <PhotoGallery />
      <GuestBook />
      <Footer />
    </div>
  );
}

export default App;
