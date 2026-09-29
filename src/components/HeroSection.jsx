




import React from 'react';

const HeroSection = () => {
  return (
    <section 
      // h-dvh দিয়ে ফুলস্ক্রিন করা হয়েছে এবং rounded-b-[40px] দিয়ে নিচের দুই কর্নার রাউন্ড করা হয়েছে
      className="relative w-full h-dvh overflow-hidden bg-cover bg-center bg-no-repeat rounded-b-[40px] md:rounded-b-[60px] shadow-sm"
      style={{ backgroundImage: "url('/cover.jpeg')" }} 
    >
     
    </section>
  );
};

export default HeroSection;







