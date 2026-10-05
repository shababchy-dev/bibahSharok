import React from "react";

function CoupleProfile() {
  return (
    <>
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
        `}
      </style>

      <div className="relative z-20 -mt-40 md:-mt-48 w-full font-sans opacity-0 animate-fade-in-up">
        
        {/* Card Container: overflow-hidden */}
        <div className="flex flex-row justify-between items-start bg-white/85 backdrop-blur-md py-6 px-1 md:p-10 rounded-[30px] md:rounded-[30px] shadow-[0_25px_50px_-12px_rgba(139,30,65,0.25)] border-y md:border border-white/60 relative w-full overflow-hidden">
          
          {/* 
            সেন্টার ওয়াটারমার্ক লাভ আইকন (Background Overlay)
            absolute পজিশন দিয়ে একদম মাঝখানে রাখা হয়েছে। 
            z-0 এবং opacity-30 দিয়ে একে হালকা জলছাপের মতো করা হয়েছে। 
            pointer-events-none দেওয়া হয়েছে যেন এতে কোনো ক্লিক না পড়ে।
          */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 opacity-40 pointer-events-none">
            <svg 
              className="w-32 h-32 md:w-72 md:h-72 text-pink-300" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>

          {/* Groom Profile - relative z-10 দিয়ে আইকনের ওপরে রাখা হয়েছে */}
          <div className="flex flex-col items-center flex-1 text-center px-1 relative z-10 opacity-0 animate-fade-in-up delay-100">
            <div className="w-14 h-14 md:w-32 md:h-32 rounded-full border-2 border-white shadow-md overflow-hidden bg-[#e8f0fe] mb-2">
              <img
                src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix&backgroundColor=e8f0fe"
                alt="Groom"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-[8px] md:text-xs uppercase tracking-wider text-[#8B1E41] font-bold mb-1">
              The Groom
            </span>
            
            <div className="leading-tight mb-1.5 md:mb-2">
              <span className="block text-[10px] md:text-sm text-gray-600 font-medium">Hafiz Mawlana</span>
              <span className="block text-[14px] md:text-2xl font-serif text-gray-900 font-bold">Albab Ahmed</span>
            </div>
            
            <p className="text-[8px] md:text-xs text-gray-500 leading-tight">
              Eldest son of<br />Hafiz Abdur Rouf R.
            </p>
          </div>

          {/* Bride Profile - relative z-10 দিয়ে আইকনের ওপরে রাখা হয়েছে */}
          <div className="flex flex-col items-center flex-1 text-center px-1 relative z-10 opacity-0 animate-fade-in-up delay-100">
            <div className="w-14 h-14 md:w-32 md:h-32 rounded-full border-2 border-white shadow-md overflow-hidden bg-[#fce8e6] mb-2">
              <img
                src="https://api.dicebear.com/7.x/notionists/svg?seed=Aneka&backgroundColor=fce8e6"
                alt="Bride"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-[8px] md:text-xs uppercase tracking-wider text-[#8B1E41] font-bold mb-1">
              The Bride
            </span>

            <div className="leading-tight mb-1.5 md:mb-2">
              <span className="block text-[10px] md:text-sm text-gray-600 font-medium">Aleema Nusaifa</span>
              <span className="block text-[14px] md:text-2xl font-serif text-gray-900 font-bold">Jannat</span>
            </div>

            <p className="text-[8px] md:text-xs text-gray-500 leading-tight">
              Youngest daughter of<br />Mawlana Hossain Ahmed
            </p>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default CoupleProfile;