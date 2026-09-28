import React from 'react';

const HeroSection = () => {
  return (
    <section 
     
      className="relative w-full h-dvh overflow-hidden bg-cover bg-center bg-no-repeat flex flex-col justify-end items-center pb-12"
      
      style={{ backgroundImage: "url('/cover.jpeg')" }} 
    >
      
      {/* niche jawar chinho) */}
      <div className="z-10 animate-bounce bg-white/50 backdrop-blur-sm p-3 rounded-full shadow-lg cursor-pointer hover:bg-white/80 transition" onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}>
        <svg className="w-6 h-6 text-rose-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
      
    </section>
  );
};

export default HeroSection;