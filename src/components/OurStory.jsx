import React from 'react';

function CoupleProfile() {
  return (
    <div className="py-16 px-4 md:px-8 max-w-5xl mx-auto">
      
      {/* Title Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif text-[#8B1E41] font-bold mb-3 tracking-wide">
          Meet the Couple
        </h2>
        <div className="w-24 h-1 bg-rose-200 mx-auto rounded-full mb-4"></div>
        <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base italic">
          Two souls, one heart. We are thrilled to start this beautiful journey together.
        </p>
      </div>

      {/* Profiles Container (Side by Side on larger screens) */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-8 lg:gap-16">
        
        {/* Groom Profile */}
        <div className="flex flex-col items-center text-center bg-white p-8 rounded-[40px] shadow-[0_10px_40px_-15px_rgba(139,30,65,0.2)] border border-rose-50 w-full md:w-1/2 relative group hover:-translate-y-2 transition duration-500">
          
          {/* Decorative Background for Avatar */}
          <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-rose-50 to-transparent rounded-t-[40px] -z-10"></div>
          
          {/* Groom Avatar */}
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-xl overflow-hidden bg-[#e8f0fe] mb-6 relative">
            <img 
              src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix&backgroundColor=e8f0fe" 
              alt="The Groom" 
              className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
            />
          </div>
          
          <h3 className="text-xs uppercase tracking-[0.2em] text-[#8B1E41] font-bold mb-2">The Groom</h3>
          <h4 className="text-2xl md:text-3xl font-serif text-gray-800 font-bold mb-1">
            [Groom's Name]
          </h4>
          
          {/* Divider */}
          <div className="w-12 h-px bg-rose-200 my-4"></div>
          
          {/* Family Background */}
          <p className="text-gray-600 text-sm leading-relaxed">
            Eldest son of Mr. [Father's Name] and Mrs. [Mother's Name]. 
            <br className="mb-2" />
            <span className="text-gray-400 text-xs">Currently working as a [Profession] at [Company Name].</span>
          </p>
        </div>


        {/* The "&" symbol between profiles (Visible only on PC) */}
        <div className="hidden md:flex items-center justify-center">
          <div className="w-14 h-14 bg-[#8B1E41] text-white rounded-full flex items-center justify-center font-serif text-2xl shadow-lg z-10">
            &
          </div>
        </div>


        {/* Bride Profile */}
        <div className="flex flex-col items-center text-center bg-white p-8 rounded-[40px] shadow-[0_10px_40px_-15px_rgba(139,30,65,0.2)] border border-rose-50 w-full md:w-1/2 relative group hover:-translate-y-2 transition duration-500">
          
          {/* Decorative Background for Avatar */}
          <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-rose-50 to-transparent rounded-t-[40px] -z-10"></div>
          
          {/* Bride Avatar */}
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-xl overflow-hidden bg-[#fce8e6] mb-6 relative">
            <img 
              src="https://api.dicebear.com/7.x/notionists/svg?seed=Aneka&backgroundColor=fce8e6" 
              alt="The Bride" 
              className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
            />
          </div>
          
          <h3 className="text-xs uppercase tracking-[0.2em] text-[#8B1E41] font-bold mb-2">The Bride</h3>
          <h4 className="text-2xl md:text-3xl font-serif text-gray-800 font-bold mb-1">
            [Bride's Name]
          </h4>
          
          {/* Divider */}
          <div className="w-12 h-px bg-rose-200 my-4"></div>
          
          {/* Family Background */}
          <p className="text-gray-600 text-sm leading-relaxed">
            Youngest daughter of Mr. [Father's Name] and Mrs. [Mother's Name].
            <br className="mb-2" />
            <span className="text-gray-400 text-xs">Graduated from [University Name] in [Subject].</span>
          </p>
        </div>

      </div>
    </div>
  );
}

export default CoupleProfile;