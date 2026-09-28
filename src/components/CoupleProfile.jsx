import React from "react";

function CoupleProfile() {
  return (
    <div className="py-8 px-4 max-w-4xl mx-auto font-sans ">
      {/* Title Section */}
      {/* <div className="text-center mb-10 ">
        <h2 className="text-2xl md:text-4xl font-serif text-[#8B1E41] font-bold mb-1">
          Meet the Couple
        </h2>
        <div className="w-16  bg-pink-200 mx-auto rounded-full mb-3"></div>
        <p className="text-gray-600 text-sm md:text-base italic px-4">
          Two souls, one heart. We are thrilled to start this beautiful journey together.
        </p>
      </div> */}

      {/* Profiles Container - Flex Row for Mobile to show side-by-side */}
      <div className="flex flex-row justify-center items-center gap-4 md:gap-12 bg-white p-6 md:p-10 rounded-[30px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-pink-50 relative">
        {/* Groom Profile */}
        <div className="flex flex-col items-center flex-1 w-1/2">
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
          <h3 className="text-lg md:text-2xl font-serif text-gray-800 font-bold text-center">
            Hafiz Mawlana Albab
          </h3>
        </div>

        {/* The "&" symbol - Central Element */}
        <div className="flex-shrink-0 z-10 px-2">
          <div className="w-10 h-10 md:w-14 md:h-14 bg-pink-50 text-[#8B1E41] rounded-full flex items-center justify-center font-serif text-xl md:text-2xl shadow-sm border border-pink-100">
            &
          </div>
        </div>

        {/* Bride Profile */}
        <div className="flex flex-col items-center flex-1 w-1/2">
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
          <h3 className="text-lg md:text-2xl font-serif text-gray-800 font-bold text-center">
            Aleema Nusaifa Jannat
          </h3>
        </div>
      </div>
    </div>
  );
}

export default CoupleProfile;
