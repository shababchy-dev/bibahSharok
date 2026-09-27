import React, { useState } from "react";

// আর্টিকেলের ডেটাগুলো কম্পোনেন্টের বাইরে রাখা হলো প্রফেশনাল স্ট্রাকচারের জন্য
const articlesData = [
  {
    id: 1,
    isEditorial: true, // এটি সম্পাদকীয় কিনা তা বোঝানোর জন্য
    title: "বিবাহ: এক পবিত্র বন্ধন",
    author: "আব্দুর রহমান",
    date: "১৫ সেপ্টেম্বর, ২০২৬",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
    content: "বিবাহ শুধু দুটি মানুষের নয়, বরং দুটি পরিবারের এক আত্মিক মিলন। ইসলামে বিবাহকে অর্ধেক দ্বীন বলা হয়েছে। আমাদের আলবাব নতুন জীবনে পা রাখতে যাচ্ছে, এটি আমাদের পুরো পরিবারের জন্য অত্যন্ত আনন্দের একটি মুহূর্ত। দাম্পত্য জীবনে পারস্পরিক সম্মান, ভালোবাসা এবং একে অপরকে ছাড় দেওয়ার মানসিকতাই হলো সুখের মূল চাবিকাঠি। নতুন এই পথচলায় অনেক দায়িত্ব আসবে, তবে একে অপরের পাশে থাকলে সব কিছুই সহজ হয়ে যায়। আল্লাহ তাদের নতুন জীবনকে বরকতময় করুন এবং দুনিয়া ও আখিরাতে কল্যাণের পথে অবিচল রাখুন।",
  },
  {
    id: 2,
    isEditorial: false,
    title: "নতুন জীবনের পথে",
    author: "ফাতেমা বেগম",
    date: "১৬ সেপ্টেম্বর, ২০২৬",
    image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1200&auto=format&fit=crop",
    content: "ছোটবেলা থেকেই আলবাবকে দেখেছি, আজ সে নিজে একটি সংসার শুরু করতে যাচ্ছে। সময় কত দ্রুত কেটে যায়! মানুষের জীবনে এমন কিছু মুহূর্ত আসে যা চিরকাল অমলিন হয়ে থাকে। বিবাহ ঠিক তেমনই একটি মুহূর্ত। আমাদের সবার দোয়া রইল, তোরা সবসময় হাসিখুশি থাকিস এবং একে অন্যের শক্তি হয়ে উঠিস। জীবনের প্রতিটি পদক্ষেপে আল্লাহ তোদের সহায় হোন। যেকোনো পরিস্থিতিতে একে অপরের প্রতি বিশ্বাস ও সম্মান বজায় রাখবি।",
  },
  {
    id: 3,
    isEditorial: false,
    title: "To Albab Bhai",
    author: "Naima Chowdhury",
    date: "১৫ সেপ্টেম্বর, ২০২৬",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
    content: "To Albab Bhai, I still remember when you were a little baby and you would sleep next to me and your bhaisab, and now I cant believe you are getting married!!! I am so happy for you and Jannat, May Allah put barakah in your marriage. Just because you are getting married don't forget to message me lol. Love and Duas from your Favourite Bhabi",
  },
  {
    id: 5, // ID ঠিক করা হয়েছে
    isEditorial: false,
    title: "ছোট্ট আলবাব থেকে আজকের বর",
    author: "ছোট আপা",
    date: "১৫ সেপ্টেম্বর, ২০২৬",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
    content: "আলবাব, ছোটবেলার সেই মজার কথাটা আজও মনে পড়ে। তখন তুই ছিলি একেবারে পিচ্চি। আব্বা তোকে একটা লাল সাইকেল কিনে দিয়েছিলেন। সাইকেল পেয়ে তোর আনন্দের যেন শেষ ছিল না! আবার সাইকেল নিয়ে তোর চিন্তাও ছিল বেশ গভীর! তুই তখন খুব আত্মবিশ্বাসের সঙ্গে বলতি—সাইকেল তালা মেরে চাবি পানিতে ফেলে দেবো, যাতে কেউ চাবি খুঁজে না পায়, আর সাইকেলও চালাতে না পারে তখন কে জানত,এতো তাড়াতাড়ি সেই ছোট্ট আলবাব একদিন বড় হয়ে যাবে, আর জীবনের সবচেয়ে সুন্দর একটা অধ্যায়ের সামনে এসে দাঁড়াবে!আজ সেই পিচ্চি আলবাবের বিয়ে! জান্নাতকে পাশে নিয়ে জীবনের নতুন পথচলা শুরু করছে। জান্নাত হাসিখুশী থেকো সাইকেলের চাবিটা যত্ন করে রেখো সাথে আমার ভাইকেও। আল্লাহ তোমাদের নতুন জীবনকে শান্তি, রহমত ও বরকতে পূর্ণ করুন। একে অপরের জন্য ভালোবাসা ও মায়া দিন দিন বাড়িয়ে দিন।দুনিয়া থেকে জান্নাত পর্যন্ত তোমাদেরকে একসঙ্গে রাখুন",
  },
  {
    id: 5, // ID ঠিক করা হয়েছে
    isEditorial: false,
    title: "১০ টাকার সাদা চুল",
    author: "মাহজাবিন",
    date: "১৫ সেপ্টেম্বর, ২০২৬",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
    content: "একদিন লাল মামা চুল কালো করে এসে বললেন,“তুই যদি আমার মাথা থেকে একটা সাদা চুল এনে দিতে পারিস, তাহলে তোকে ১০ টাকা দেব।” আমি তো ১০ টাকার লোভে গোয়েন্দার মতো মামার মাথা খুঁজতে লাগলাম—এদিক-ওদিক, সামনে-পেছনে, কোথাও সাদা চুলের দেখা নেই! অবশেষে ছোট মামার মাথা থেকে একটা সাদা চুল এনে লাল মামাকে দিয়ে বললাম, এই যে পেয়েছি টাকা দাও ! ১০ টাকা হাতে পাওয়ার পর সত্যিটা প্রকাশ করলাম আর দিলাম এক দৌড়! সেই ছোট্ট দুষ্টুমির দিনগুলো আজ শুধু স্মৃতি। আজ আমার প্রিয় লাল মামার বিয়ে! আল্লাহ আমাদের লাল মামা ও জান্নাত মামির দাম্পত্য জীবন হাসি, সুখ, শান্তি ও বরকতে ভরিয়ে দিন। মায়া ভালোবাসা ও বন্ধন সারাজীবন অটুট থাকুক। আমিন।"
  },
  
];

const Articles = () => {
  // কোন কার্ডটি এক্সপ্যান্ড করা আছে তা ট্র্যাক করার স্টেট
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    // যদি একই কার্ডে আবার ক্লিক করা হয়, তবে সেটি বন্ধ হয়ে যাবে, নয়তো নতুনটি খুলবে
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="py-16 md:py-24 bg-rose-50/30">
      <div className="max-w-4xl mx-auto px-4 space-y-12">
        
        {articlesData.map((article) => {
          // প্রথম লেখাটি (সম্পাদকীয়) সবসময় খোলা থাকবে
          const isExpanded = article.isEditorial || expandedId === article.id;

          return (
            <article 
              key={article.id} 
              className={`bg-white rounded-[32px] overflow-hidden transition-all duration-500 ease-in-out border border-rose-100 shadow-[0_8px_30px_rgb(139,30,65,0.08)] ${!article.isEditorial ? 'cursor-pointer hover:shadow-[0_8px_30px_rgb(139,30,65,0.15)]' : ''}`}
              onClick={() => !article.isEditorial && toggleExpand(article.id)} // শুধুমাত্র সম্পাদকীয় ছাড়া বাকিগুলোতে ক্লিক কাজ করবে
            >
              <div className="flex flex-col md:flex-row">
                
                {/* ইমেজ সেকশন */}
                <div className="w-full md:w-2/5 h-48 md:h-auto">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* কন্টেন্ট সেকশন */}
                <div className="w-full md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
                  
                  {/* হেডার: টাইটেল ও মেটা ডেটা */}
                  <div className="mb-6">
                    {article.isEditorial && (
                      <span className="inline-block px-3 py-1 bg-rose-100 text-[#8B1E41] text-xs font-bold uppercase tracking-widest rounded-full mb-3">
                        সম্পাদকীয়
                      </span>
                    )}
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#8B1E41] mb-2 leading-snug">
                      {article.title}
                    </h2>
                    <div className="text-gray-500 text-sm flex items-center gap-2 font-medium">
                      <span className="text-gray-800">{article.author}</span>
                      <span className="text-rose-200">•</span>
                      <span>{article.date}</span>
                    </div>
                  </div>

                  {/* মূল লেখা */}
                  <div className="text-gray-600 text-base md:text-lg leading-relaxed font-sans relative">
                    <p className={`transition-all duration-500 ${!isExpanded ? 'line-clamp-2' : ''}`}>
                      {article.content}
                    </p>
                    
                    {/* Read More / Read Less বাটন (শুধু সম্পাদকীয় ছাড়া বাকিগুলোর জন্য) */}
                    {!article.isEditorial && (
                      <button 
                        className="mt-4 text-[#8B1E41] font-semibold text-sm hover:text-rose-700 transition-colors flex items-center gap-1"
                        onClick={(e) => {
                           e.stopPropagation(); // কার্ডের ক্লিক ইভেন্ট যেন বাটনে ক্লিক করলে ট্রিগার না হয়
                           toggleExpand(article.id);
                        }}
                      >
                        {isExpanded ? "কম পড়ুন" : "আরও পড়ুন"} 
                        <svg className={`w-4 h-4 transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    )}
                  </div>

                </div>
              </div>
            </article>
          );
        })}
        
      </div>
    </section>
  );
};

export default Articles;