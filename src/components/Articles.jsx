import React, { useState } from "react";
import articlesData from "./articlesData.js";

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
              className={`bg-white rounded-[32px] overflow-hidden transition-all duration-500 ease-in-out border border-rose-100 shadow-[0_8px_30px_rgb(139,30,65,0.08)] ${!article.isEditorial ? "cursor-pointer hover:shadow-[0_8px_30px_rgb(139,30,65,0.15)]" : ""}`}
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
                    <p
                      className={`transition-all duration-500 text-justify ${!isExpanded ? "line-clamp-2" : ""}`}
                    >
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
                        <svg
                          className={`w-4 h-4 transform transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
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
