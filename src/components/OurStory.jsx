import React from 'react';

// রিইউজেবল প্রোফাইল কার্ড কম্পোনেন্ট
const ProfileCard = ({ role, name, image, bgColor, familyInfo, extraInfo }) => {
  return (
    <div className="flex flex-col items-center text-center bg-white p-8 rounded-[40px] shadow-[0_10px_40px_-15px_rgba(139,30,65,0.2)] border border-rose-50 w-full md:w-1/2 relative group hover:-translate-y-2 transition duration-500">
      
      {/* Decorative Background */}
      <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-rose-50 to-transparent rounded-t-[40px] -z-10"></div>
      
      {/* Avatar */}
      <div className={`w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-xl overflow-hidden mb-6 relative ${bgColor}`}>
        <img 
          src={image} 
          alt={role} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
        />
      </div>
      
      <h3 className="text-xs uppercase tracking-[0.2em] text-[#8B1E41] font-bold mb-2">{role}</h3>
      <h4 className="text-2xl md:text-3xl font-serif text-gray-800 font-bold mb-1">
        {name}
      </h4>
      
      {/* Divider */}
      <div className="w-12 h-px bg-rose-200 my-4"></div>
      
      {/* Family & Extra Info */}
      <p className="text-gray-600 text-sm leading-relaxed">
        {familyInfo}
        <br className="mb-2" />
        <span className="text-gray-400 text-xs">{extraInfo}</span>
      </p>
    </div>
  );
};

export default function CoupleProfile() {
  // প্রফেশনাল অ্যাপ্রোচ: ডেটা আলাদা করে রাখা
  const coupleData = {
    groom: {
      role: "The Groom",
      name: "Hafiz Mawlana Albab Ahmed",
      image: "https://api.dicebear.com/7.x/notionists/svg?seed=Felix&backgroundColor=e8f0fe",
      bgColor: "bg-[#e8f0fe]",
      familyInfo: "Eldest son of Hafiz Abdur Rouf R.",
      extraInfo: "Currently working as a [Profession] at [Company Name]."
    },
    bride: {
      role: "The Bride",
      name: "Aleema Nusaifa Jannat",
      image: "https://api.dicebear.com/7.x/notionists/svg?seed=Aneka&backgroundColor=fce8e6",
      bgColor: "bg-[#fce8e6]",
      familyInfo: "Youngest daughter of Mawlana Hossain Ahmed.",
      extraInfo: "Graduated from [University Name] in [Subject]."
    }
  };

  return (
    <section className="py-16 px-4 md:px-8 max-w-5xl mx-auto">
      
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

      {/* Profiles Container */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-8 lg:gap-16">
        
        {/* Render Groom Profile */}
        <ProfileCard {...coupleData.groom} />

        {/* The "&" symbol (Hidden from screen readers for accessibility) */}
        <div className="hidden md:flex items-center justify-center" aria-hidden="true">
          <div className="w-14 h-14 bg-[#8B1E41] text-white rounded-full flex items-center justify-center font-serif text-2xl shadow-lg z-10 hover:rotate-12 transition-transform duration-300">
            &
          </div>
        </div>

        {/* Render Bride Profile */}
        <ProfileCard {...coupleData.bride} />

      </div>
    </section>
  );
}