import React, { useState, useEffect, useRef } from 'react';
import { auth, googleProvider, db } from '../firebase';
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from 'firebase/firestore';
import imageCompression from 'browser-image-compression';

function PhotoGallery() {
  const [user, setUser] = useState(null);
  const [images, setImages] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);

  // Cloudinary ইনফরমেশন (এখানে আপনার তথ্য দিন)
  const CLOUD_NAME = "i8fwrztt"; 
  const UPLOAD_PRESET = "bibah_preset";

  // ইউজার লগইন চেক
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => setUser(currentUser));
    return () => unsubscribe();
  }, []);

  // ডাটাবেস থেকে ছবি আনা (রিয়েল-টাইম)
  useEffect(() => {
    const q = query(collection(db, "gallery"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const loadedImages = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setImages(loadedImages);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("লগইন এরর:", error);
    }
  };

  // ছবি আপলোডের মূল ফাংশন
  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file || !user) return;

    setIsUploading(true);

    try {
      // ১. ছবি কম্প্রেশন (সাইজ কমানো)
      const options = { maxSizeMB: 1, maxWidthOrHeight: 1920, useWebWorker: true };
      const compressedFile = await imageCompression(file, options);

      // ২. Cloudinary-তে পাঠানো
      const formData = new FormData();
      formData.append('file', compressedFile);
      formData.append('upload_preset', UPLOAD_PRESET);

      const response = await fetch(`https://api.cloudinary.com/v1_1/${"i8fwrztt"}/image/upload`, {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();

      // ৩. ছবির লিংক Firebase-এ সেভ করা
      if (data.secure_url) {
        await addDoc(collection(db, "gallery"), {
          imageUrl: data.secure_url,
          uploaderName: user.displayName,
          uploaderPhoto: user.photoURL,
          timestamp: serverTimestamp()
        });
      }
    } catch (error) {
      console.error("ছবি আপলোডে সমস্যা:", error);
      alert("ছবি আপলোড করা যায়নি। আবার চেষ্টা করুন।");
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = ""; // ইনপুট ক্লিয়ার করা
    }
  };

  return (
    <div className="p-4 md:p-8 max-w-6xl mx-auto">
      
      {/* আপলোড সেকশন */}
      <div className="bg-white p-6 rounded-3xl shadow-sm border border-rose-100 mb-8 text-center flex flex-col items-center justify-center">
        <h3 className="text-xl font-bold font-serif text-[#8B1E41] mb-2">Capture the Memories</h3>
        <p className="text-gray-500 text-sm mb-6 max-w-md">Share the beautiful moments of the wedding with everyone. Please sign in with Google to upload photos.</p>
        
        {!user ? (
          <button onClick={handleLogin} className="bg-white border border-gray-200 text-gray-700 px-6 py-2.5 rounded-full shadow-sm hover:bg-gray-50 transition flex items-center justify-center gap-3 font-medium">
             Google দিয়ে লগইন করুন
          </button>
        ) : (
          <div>
            <input 
              type="file" 
              accept="image/*" 
              ref={fileInputRef} 
              onChange={handleImageUpload} 
              className="hidden" 
              id="upload-btn" 
            />
            <label 
              htmlFor="upload-btn" 
              className={`bg-[#8B1E41] text-white px-8 py-3.5 rounded-full font-bold shadow-md hover:shadow-lg transition flex items-center justify-center gap-2 cursor-pointer ${isUploading ? 'opacity-70 pointer-events-none' : 'hover:bg-[#5c1028]'}`}
            >
              {isUploading ? 'Uploading your memory...' : '📸 Upload Photo'}
            </label>
            <p className="text-xs text-gray-400 mt-3">লগইন করা আছে: <span className="font-semibold text-gray-600">{user.displayName}</span></p>
          </div>
        )}
      </div>

      {/* গ্যালারি গ্রিড (Masonry স্টাইল) */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {images.length === 0 ? (
          <div className="col-span-full text-center py-12 text-gray-400 border-2 border-dashed border-rose-100 rounded-3xl w-full">
            এখনো কোনো ছবি যুক্ত করা হয়নি।
          </div>
        ) : (
          images.map((img) => (
            <div key={img.id} className="relative group break-inside-avoid rounded-xl overflow-hidden bg-gray-100 mb-4 shadow-sm">
              {/* Lazy loading ব্যবহার করা হয়েছে */}
              <img 
                src={img.imageUrl} 
                alt="Wedding Moment" 
                loading="lazy" 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-500"
              />
              
              {/* ছবির ওপর আপলোডকারীর নাম (হোভার করলে দেখাবে) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-3">
                <div className="flex items-center gap-2 text-white">
                  <img src={img.uploaderPhoto} alt={img.uploaderName} className="w-6 h-6 rounded-full border border-white/50" />
                  <span className="text-xs font-medium truncate">{img.uploaderName}</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

    </div>
  );
}

export default PhotoGallery;