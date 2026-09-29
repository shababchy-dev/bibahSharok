import React, { useEffect, useRef } from 'react';

const HeroSection = () => {
  // ১. useRef ব্যবহার করে সরাসরি সেকশনটিকে ধরার জন্য একটি রেফারেন্স তৈরি করলাম
  const heroRef = useRef(null);

  useEffect(() => {
    // ২. পেজ লোড হওয়ার সাথে সাথে সরাসরি DOM-এ গিয়ে উচ্চতা পিক্সেল হিসেবে বসিয়ে দিলাম। 
    // এতে React-এর কোনো স্টেট আপডেট হবে না, ফলে কোনো কাঁপুনিও (Jumping) হবে না।
    if (heroRef.current) {
      heroRef.current.style.height = `${window.innerHeight}px`;
    }

    // ৩. শুধুমাত্র কেউ যদি মোবাইল আড়াআড়ি (Landscape) করে, তখন যেন সাইজ ঠিক থাকে
    const handleOrientation = () => {
      setTimeout(() => {
        if (heroRef.current) {
          heroRef.current.style.height = `${window.innerHeight}px`;
        }
      }, 150); // ব্রাউজারকে রোটেট হওয়ার জন্য সামান্য সময় দেওয়া হলো
    };

    window.addEventListener('orientationchange', handleOrientation);

    return () => {
      window.removeEventListener('orientationchange', handleOrientation);
    };
  }, []);

  return (
    <section 
      // ৪. ref={heroRef} দিয়ে সেকশনটিকে কানেক্ট করে দিলাম
      ref={heroRef}
      className="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat rounded-b-[40px] md:rounded-b-[60px] shadow-sm"
      style={{ 
        backgroundImage: "url('/cover.jpeg')" // height এখান থেকে সরিয়ে দেওয়া হয়েছে, কারণ JS সরাসরি বসিয়ে দিচ্ছে
      }} 
    >
      {/* হিরো সেকশনের ভেতরের কন্টেন্ট (যদি থাকে) */}
    </section>
  );
};

export default HeroSection;