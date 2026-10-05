import React, { useState, useEffect } from "react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // স্ক্রল পজিশন ট্র্যাক করার লজিক
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // নেভিগেশন আইকনগুলোর ডেটা (Articles, Gallery, Wishes, এবং 4th Demo)
  const navIcons = [
    {
      name: "Articles",
      href: "#articles",
      // Document Icon
      svg: (
        <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      name: "Gallery",
      href: "#gallery",
      // Image Icon
      svg: (
        <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      name: "Wishes",
      href: "#wishes",
      // Heart Icon
      svg: (
        <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      name: "Demo",
      href: "#demo",
      // Grid/App Icon (আপাতত ডেমো হিসেবে)
      svg: (
        <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      ),
    },
  ];

  return (
    <nav
      className={`fixed left-0 right-0 z-50 transition-all duration-1000 ease-in-out ${
        isScrolled
          ? "top-0 mx-0 rounded-b-[20px] bg-white/50 backdrop-blur-md shadow-sm border-b border-white/50 py-3 px-5 md:px-8"
          : "top-3 mx-4 md:mx-8 rounded-full bg-white/30 backdrop-blur-sm border border-white/40 py-4 px-6"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        {/* Logo / Initials */}
        <div className="shrink-0 cursor-pointer">
          <h1 className="text-2xl md:text-3xl font-serif text-[#8B1E41] font-bold tracking-widest">
            A <span className="text-pink-400 text-xl">&</span> J
          </h1>
        </div>

        {/* 4 Icon Buttons (মোবাইল এবং ডেস্কটপ উভয়ের জন্য) */}
        <div className="flex items-center gap-5 md:gap-8">
          {navIcons.map((icon) => (
            <a
              key={icon.name}
              href={icon.href}
              title={icon.name}
              className="text-gray-700 hover:text-[#8B1E41] hover:scale-110 active:scale-95 transition-all duration-300"
            >
              {icon.svg}
            </a>
          ))}
        </div>
        
      </div>
    </nav>
  );
}

export default Navbar;