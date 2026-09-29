import React, { useState, useEffect } from 'react';

const HeroSection = () => {
 
 
  const [heroHeight, setHeroHeight] = useState(
    typeof window !== 'undefined' ? `${window.innerHeight}px` : '100vh'
  );

  useEffect(() => {
    
    const handleResize = () => {
      setHeroHeight(`${window.innerHeight}px`);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    // ক্লিনআপ
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  return (
    <section 
      className="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat rounded-b-[40px] md:rounded-b-[60px] shadow-sm"
      style={{ 
        height: heroHeight, 
        backgroundImage: "url('/cover.jpeg')" 
      }} 
    >
      {/* হিরো সেকশনের ভেতরের কন্টেন্ট */}
    </section>
  );
};

export default HeroSection;