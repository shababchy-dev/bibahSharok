import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  // ১. পেজ লোড হওয়ার সময় প্রথমবার উচ্চতা ফিক্স করে নেওয়া হলো
  const [heroHeight, setHeroHeight] = useState(
    typeof window !== 'undefined' ? `${window.innerHeight}px` : '100vh'
  );

  useEffect(() => {
    // ২. পেজ লোড হওয়ার সময় স্ক্রিনের চওড়া (Width) কত, সেটা মেমোরিতে সেভ করে রাখলাম
    let lastWidth = window.innerWidth;

    const handleResize = () => {
      const currentWidth = window.innerWidth;
      
      // ৩. আসল ম্যাজিক: যদি বর্তমান চওড়া আর আগের চওড়া এক না হয় (অর্থাৎ ফোন রোটেট করা হয়েছে), 
      // শুধুমাত্র তখনই আমরা নতুন করে উচ্চতা মাপব। 
      // স্ক্রল করার সময় অ্যাড্রেস বার হাইড হলে width বদলায় না, তাই আর কাঁপবে না!
      if (currentWidth !== lastWidth) {
        setHeroHeight(`${window.innerHeight}px`);
        lastWidth = currentWidth; // নতুন চওড়াটি আবার সেভ করে রাখলাম
      }
    };

    window.addEventListener('resize', handleResize);

    // ক্লিনআপ
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section 
      className="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat rounded-b-[40px] md:rounded-b-[60px] shadow-sm"
      style={{ 
        height: heroHeight, // ফিক্সড করে রাখা উচ্চতা এখানে বসে যাবে
        backgroundImage: "url('/cover.jpeg')" 
      }} 
    >
      {/* হিরো সেকশনের ভেতরের কন্টেন্ট */}
    </section>
  );
};

export default HeroSection;