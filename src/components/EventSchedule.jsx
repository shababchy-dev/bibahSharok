import React from 'react';

const EventSchedule = () => {
  return (
    <section className="py-16 px-4 bg-rose-50/50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-rose-800 mb-10 text-center font-serif">অনুষ্ঠানের সময়সূচি</h2>
        
        <div className="space-y-6">
          {/* ইভেন্ট ১ */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-rose-500 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-gray-800">বরযাত্রী আগমন</h3>
              <p className="text-gray-600 mt-1">দুপুর ২:০০ ঘটিকা</p>
            </div>
            <div className="bg-rose-100 text-rose-700 px-4 py-2 rounded-lg text-sm font-semibold text-center">
              ১০ অক্টোবর, ২০২৬
            </div>
          </div>

          {/* ইভেন্ট ২ */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-rose-500 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-gray-800">প্রীতিভোজ ও দোয়া</h3>
              <p className="text-gray-600 mt-1">দুপুর ৩:৩০ ঘটিকা</p>
            </div>
            <div className="bg-rose-100 text-rose-700 px-4 py-2 rounded-lg text-sm font-semibold text-center">
              ১০ অক্টোবর, ২০২৬
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default EventSchedule;