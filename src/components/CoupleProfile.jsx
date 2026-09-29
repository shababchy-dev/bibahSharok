





import React from "react";

function CoupleProfile() {
  return (
    <>
      {/* 
        সফট "Fade-In-Up" অ্যানিমেশনের স্টাইল 
        এটি যুক্ত করার ফলে Tailwind config পরিবর্তন ছাড়াই অ্যানিমেশনটি কাজ করবে 
      */}
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(50px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in-up {
            animation: fadeInUp 0.8s ease-out forwards;
          }
          .delay-100 { animation-delay: 0.2s; }
          .delay-200 { animation-delay: 0.4s; }
        `}
      </style>

      {/* 
        ওভারল্যাপিং: -mt-40 md:-mt-48 (নেগেটিভ মার্জিন) দিয়ে কার্ডটিকে হিরো সেকশনের ওপর ৭৫% তুলে দেওয়া হয়েছে 
        এবং animate-fade-in-up ক্লাস দিয়ে ভেসে ওঠার অ্যানিমেশন দেওয়া হয়েছে 
      */}
      <div className="relative z-20 -mt-40 md:-mt-48 py-8 px-4 max-w-4xl mx-auto font-sans opacity-0 animate-fade-in-up">
        
        {/* Profiles Container - গ্লাসমরফিজম, Rounded [30px] এবং প্রিমিয়াম কাস্টম শ্যাডো */}
        <div className="flex flex-row justify-center items-center gap-4 md:gap-12 bg-white/85 backdrop-blur-md p-6 md:p-10 rounded-[30px] shadow-[0_25px_50px_-12px_rgba(139,30,65,0.25)] border border-white/60 relative">
          
          {/* Groom Profile */}
          <div className="flex flex-col items-center flex-1 w-1/2 opacity-0 animate-fade-in-up delay-100">
            <div className="w-20 h-20 md:w-32 md:h-32 rounded-full border-2 border-white shadow-md overflow-hidden bg-[#e8f0fe] mb-3">
              <img
                src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix&backgroundColor=e8f0fe"
                alt="Groom"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-[10px] md:text-xs uppercase tracking-wider text-[#8B1E41] font-bold mb-1">
              The Groom
            </span>
            <h3 className="text-sm md:text-2xl font-serif text-gray-800 font-bold text-center">
              Hafiz Mawlana Albab
            </h3>
          </div>

          {/* The "&" symbol - Central Element */}
          <div className="flex-shrink-0 z-10 px-2 opacity-0 animate-fade-in-up delay-200">
            <div className="w-10 h-10 md:w-14 md:h-14 bg-pink-50/80 text-[#8B1E41] rounded-full flex items-center justify-center font-serif text-xl md:text-2xl shadow-sm border border-pink-100 backdrop-blur-sm">
              &
            </div>
          </div>

          {/* Bride Profile */}
          <div className="flex flex-col items-center flex-1 w-1/2 opacity-0 animate-fade-in-up delay-100">
            <div className="w-20 h-20 md:w-32 md:h-32 rounded-full border-2 border-white shadow-md overflow-hidden bg-[#fce8e6] mb-3">
              <img
                src="https://api.dicebear.com/7.x/notionists/svg?seed=Aneka&backgroundColor=fce8e6"
                alt="Bride"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-[10px] md:text-xs uppercase tracking-wider text-[#8B1E41] font-bold mb-1">
              The Bride
            </span>
            <h3 className="text-sm md:text-2xl font-serif text-gray-800 font-bold text-center">
              Aleema Nusaifa Jannat
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default CoupleProfile;
