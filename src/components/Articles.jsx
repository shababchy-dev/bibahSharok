import React from 'react';

const Articles = () => {
  const articles = [
    {
      id: 1,
      title: "বিবাহ: এক পবিত্র বন্ধন",
      author: "আব্দুর রহমান",
      date: "১৫ সেপ্টেম্বর, ২০২৬",
      // এখানে আপনার পছন্দমতো যেকোনো ছবির লিংক দিতে পারবেন
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop", 
      content: "বিবাহ শুধু দুটি মানুষের নয়, বরং দুটি পরিবারের এক আত্মিক মিলন। ইসলামে বিবাহকে অর্ধেক দ্বীন বলা হয়েছে। আমাদের শাবাব নতুন জীবনে পা রাখতে যাচ্ছে, এটি আমাদের পুরো পরিবারের জন্য অত্যন্ত আনন্দের একটি মুহূর্ত। দাম্পত্য জীবনে পারস্পরিক সম্মান, ভালোবাসা এবং একে অপরকে ছাড় দেওয়ার মানসিকতাই হলো সুখের মূল চাবিকাঠি। নতুন এই পথচলায় অনেক দায়িত্ব আসবে, তবে একে অপরের পাশে থাকলে সব কিছুই সহজ হয়ে যায়। আল্লাহ তাদের নতুন জীবনকে বরকতময় করুন এবং দুনিয়া ও আখিরাতে কল্যাণের পথে অবিচল রাখুন।"
    },
    {
      id: 2,
      title: "নতুন জীবনের পথে",
      author: "ফাতেমা বেগম",
      date: "১৬ সেপ্টেম্বর, ২০২৬",
      image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1200&auto=format&fit=crop",
      content: "ছোটবেলা থেকেই শাবাবকে দেখেছি, আজ সে নিজে একটি সংসার শুরু করতে যাচ্ছে। সময় কত দ্রুত কেটে যায়! মানুষের জীবনে এমন কিছু মুহূর্ত আসে যা চিরকাল অমলিন হয়ে থাকে। বিবাহ ঠিক তেমনই একটি মুহূর্ত। আমাদের সবার দোয়া রইল, তোরা সবসময় হাসিখুশি থাকিস এবং একে অন্যের শক্তি হয়ে উঠিস। জীবনের প্রতিটি পদক্ষেপে আল্লাহ তোদের সহায় হোন। যেকোনো পরিস্থিতিতে একে অপরের প্রতি বিশ্বাস ও সম্মান বজায় রাখবি।"
    },
    {
      id: 3,
      title: "To Albab Bhai",
      author: "Naima Chowdhury",
      date: "১৫ সেপ্টেম্বর, ২০২৬",
      // এখানে আপনার পছন্দমতো যেকোনো ছবির লিংক দিতে পারবেন
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop", 
      content: "To Albab Bhai, I still remember when you were a little baby and you would sleep next to me and your bhaisab, and now I cant believe you are getting married!!! I am so happy for you and Jannat, May Allah put barakah in your marriage. Just because you are getting married don't forget to message me lol. Love and Duas from your Favourite Bhabi"
    },
    {
       id: 3,
      title: "To Albab Bhai",
      author: "Umaiyya babi",
      date: "১৫ সেপ্টেম্বর, ২০২৬",
      // এখানে আপনার পছন্দমতো যেকোনো ছবির লিংক দিতে পারবেন
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop", 

      content:"Nikah Mubarak May Allah bless your marriage with endless muwaddah wa rahmah, love,laughter, and barakah. May you be the coolness of each other seyes, like the beautiful bond of Muhammad ﷺ and Khadijah (ra), and a means of entering Jannatul Firdaus together. May Allah bless you with the best of marriages. Ameen ya Rabb! With love and duas always."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 space-y-24">
        
        {articles.map((article) => (
          <article key={article.id} className="w-full">
            
            {/* শিরোনাম এবং লেখকের নাম ও তারিখ */}
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 leading-snug">
                {article.title}
              </h2>
              <div className="text-gray-500 text-sm md:text-base flex justify-center items-center gap-2 font-medium">
                <span>{article.author}</span>
                <span className="text-gray-300">|</span>
                <span>{article.date}</span>
              </div>
            </div>

            {/* কভার ছবি */}
            <div className="w-full mb-8 rounded-xl overflow-hidden shadow-sm">
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-auto max-h-[400px] object-cover"
              />
            </div>

            {/* মূল প্রবন্ধ */}
            <div className="text-gray-800 text-lg md:text-xl leading-loose md:leading-[2.2] text-justify font-sans">
              <p>{article.content}</p>
            </div>
            
          </article>
        ))}

      </div>
    </section>
  );
};

export default Articles;