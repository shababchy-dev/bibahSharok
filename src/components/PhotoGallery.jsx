import React, { useState, useEffect, useRef } from "react";
import { auth, googleProvider, db } from "../firebase";
import { signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import imageCompression from "browser-image-compression";

function PhotoGallery() {
  const [user, setUser] = useState(null);
  const [images, setImages] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);

  // জুম ইফেক্ট এর State & Refs
  const [heldImage, setHeldImage] = useState(null);
  const pressTimer = useRef(null);
  const touchStartPos = useRef({ x: 0, y: 0 });
  
  // নতুন Ref: টাচ ডিভাইসের ঘোস্ট ইভেন্ট ব্লক করার জন্য
  const isTouchDevice = useRef(false);

  // Cloudinary Configuration
  const CLOUD_NAME = "i8fwrztt";
  const UPLOAD_PRESET = "bibah_preset";

  // Check Auth State
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Fetch Gallery Images Real-time
  useEffect(() => {
    const q = query(collection(db, "gallery"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const loadedImages = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setImages(loadedImages);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  const handleImageUpload = async (event) => {
    const file = event.target.files?.[0];
    if (!file || !user) return;

    setIsUploading(true);

    try {
      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
      };
      const compressedFile = await imageCompression(file, options);

      const formData = new FormData();
      formData.append("file", compressedFile);
      formData.append("upload_preset", UPLOAD_PRESET);

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to upload image to Cloudinary");
      }

      const data = await response.json();

      if (data.secure_url) {
        await addDoc(collection(db, "gallery"), {
          imageUrl: data.secure_url,
          uploaderName: user.displayName || "Anonymous",
          uploaderPhoto: user.photoURL || "",
          timestamp: serverTimestamp(),
        });
      }
    } catch (error) {
      console.error("Upload Error:", error);
      alert("ছবি আপলোড করা যায়নি। আবার চেষ্টা করুন।");
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  // ==========================================
  // রিফ্যাক্টরড জুম লজিক (Ghost Event Fix)
  // ==========================================

  const startZoom = (imgUrl) => {
    if (pressTimer.current) clearTimeout(pressTimer.current);
    pressTimer.current = setTimeout(() => {
      setHeldImage(imgUrl);
    }, 300);
  };

  const cancelZoom = () => {
    if (pressTimer.current) {
      clearTimeout(pressTimer.current);
      pressTimer.current = null;
    }
    setHeldImage(null);
  };

  // --- মোবাইল টাচ ইভেন্ট ---
  const handleTouchStart = (e, imgUrl) => {
    isTouchDevice.current = true; // টাচ ডিভাইস সনাক্ত করা হলো
    const touch = e.touches[0];
    touchStartPos.current = { x: touch.clientX, y: touch.clientY };
    startZoom(imgUrl);
  };

  const handleTouchMove = (e) => {
    if (!pressTimer.current) return;
    const touch = e.touches[0];
    const diffX = Math.abs(touch.clientX - touchStartPos.current.x);
    const diffY = Math.abs(touch.clientY - touchStartPos.current.y);

    if (diffX > 10 || diffY > 10) {
      cancelZoom();
    }
  };

  // --- ডেস্কটপ মাউস ইভেন্ট ---
  const handleMouseDown = (imgUrl) => {
    if (isTouchDevice.current) return; // মোবাইলে মাউস ইভেন্ট ইগনোর করবে
    startZoom(imgUrl);
  };

  const handleMouseUpOrLeave = () => {
    if (isTouchDevice.current) return; // মোবাইলে মাউস লিভ কনফ্লিক্ট দূর করবে
    cancelZoom();
  };

  // ==========================================

  return (
    <div id="gallery" className="p-4 md:p-8 max-w-6xl mx-auto relative">
      {/* Upload Header Section */}
      <div className="bg-white p-6 rounded-3xl shadow-sm border border-rose-100 mb-8 text-center flex flex-col items-center justify-center">
        <h3 className="text-xl font-bold font-serif text-[#8B1E41] mb-2">
          Capture the Memories
        </h3>
        <p className="text-gray-500 text-sm mb-6 max-w-md">
          Share the beautiful moments of the wedding with everyone. Please sign
          in with Google to upload photos.
        </p>

        {!user ? (
          <button
            onClick={handleLogin}
            className="bg-white border border-gray-200 text-gray-700 px-6 py-2.5 rounded-full shadow-sm hover:bg-gray-50 transition flex items-center justify-center gap-3 font-medium"
          >
            Google দিয়ে লগইন করুন
          </button>
        ) : (
          <div className="flex flex-col items-center gap-3">
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageUpload}
              className="hidden"
              id="upload-btn"
              disabled={isUploading}
            />
            <label
              htmlFor="upload-btn"
              className={`bg-[#8B1E41] text-white px-8 py-3.5 rounded-full font-bold shadow-md hover:shadow-lg transition flex items-center justify-center gap-2 cursor-pointer ${
                isUploading ? "opacity-70 pointer-events-none" : "hover:bg-[#5c1028]"
              }`}
            >
              {isUploading ? "Uploading your memory..." : "📸 Upload Photo"}
            </label>
            <div className="flex items-center gap-2 text-xs text-gray-400 mt-1">
              <span>
                লগইন করা আছে:{" "}
                <strong className="text-gray-600">{user.displayName}</strong>
              </span>
              <span>•</span>
              <button
                onClick={handleLogout}
                className="text-rose-600 hover:underline font-medium"
              >
                লগআউট
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Gallery Grid */}
      {images.length === 0 ? (
        <div className="text-center py-12 text-gray-400 border-2 border-dashed border-rose-100 rounded-3xl w-full">
          এখনো কোনো ছবি যুক্ত করা হয়নি।
        </div>
      ) : (
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((img) => (
            <div
              key={img.id}
              className="relative group break-inside-avoid rounded-xl overflow-hidden bg-gray-100 mb-4 shadow-sm cursor-pointer select-none [-webkit-touch-callout:none] active:scale-95 transition-transform duration-150"
              
              onMouseDown={() => handleMouseDown(img.imageUrl)}
              onMouseUp={handleMouseUpOrLeave}
              onMouseLeave={handleMouseUpOrLeave}
              
              onTouchStart={(e) => handleTouchStart(e, img.imageUrl)}
              onTouchMove={handleTouchMove}
              onTouchEnd={cancelZoom}
              onTouchCancel={cancelZoom}
              
              onContextMenu={(e) => e.preventDefault()}
            >
              <img
                src={img.imageUrl}
                alt="Wedding Moment"
                loading="lazy"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-500 pointer-events-none"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-3 pointer-events-none">
                <div className="flex items-center gap-2 text-white">
                  {img.uploaderPhoto ? (
                    <img
                      src={img.uploaderPhoto}
                      alt={img.uploaderName || "User"}
                      className="w-6 h-6 rounded-full border border-white/50"
                    />
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-rose-500 text-white flex items-center justify-center text-xs font-bold">
                      {img.uploaderName?.[0] || "U"}
                    </div>
                  )}
                  <span className="text-xs font-medium truncate">
                    {img.uploaderName}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* জুম পপআপ */}
      {heldImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in pointer-events-none">
          <div className="relative max-w-full max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl border border-white/10 scale-100 transform transition-transform duration-300 animate-zoom-in">
            <img
              src={heldImage}
              alt="Enlarged Moment"
              className="max-w-full max-h-[80vh] object-contain rounded-2xl"
            />
            <div className="absolute top-3 left-1/2 transform -translate-x-1/2 bg-black/60 text-white text-xs px-3 py-1.5 rounded-full font-medium shadow-sm border border-white/20">
              Release to Close
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PhotoGallery;