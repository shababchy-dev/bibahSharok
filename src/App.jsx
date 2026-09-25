import React from "react";
import HeroSection from "./components/HeroSection";
import OurStory from "./components/OurStory";
import EventSchedule from "./components/EventSchedule";
import PhotoGallery from "./components/PhotoGallery";
import GuestBook from "./components/GuestBook";
import Articles from "./components/Articles";
import Footer from "./components/Footer";



function App() {
  return (
    <div className="bg-rose-50 min-h-screen font-sans text-gray-800 w-full overflow-x-hiden ">
      <HeroSection />
      <OurStory />
      <Articles />
      <EventSchedule />
      <PhotoGallery />
      <GuestBook />
      <Footer/>
    </div>
  );
}

export default App;



































