import React, { useState, useEffect } from 'react';
import { auth, googleProvider, db } from '../firebase';
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from 'firebase/firestore';

function GuestBook() {
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ইউজারের লগইন অবস্থা চেক করা
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // ডাটাবেস থেকে মেসেজ আনা
  useEffect(() => {
    const q = query(collection(db, "guestbook"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const loadedMessages = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setMessages(loadedMessages);
    });
    return () => unsubscribe();
  }, []);

  // গুগল লগইন
  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("লগইন এরর:", error);
    }
  };

  // মেসেজ সাবমিট করা
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newMessage.trim() || !user) return;
    
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, "guestbook"), {
        text: newMessage,
        userName: user.displayName,
        userPhoto: user.photoURL,
        timestamp: serverTimestamp()
      });
      setNewMessage('');
    } catch (error) {
      console.error("মেসেজ পাঠাতে এরর:", error);
      alert("দুঃখিত, মেসেজ পাঠানো যায়নি। আবার চেষ্টা করুন।");
    }
    setIsSubmitting(false);
  };

  return (
    <div className="p-4 md:p-8 max-w-2xl mx-auto">
      
      {/* ইনপুট বা লগইন সেকশন */}
      <div className="mb-10">
        {!user ? (
          <div className="bg-rose-50 p-6 rounded-3xl shadow-sm border border-rose-100 text-center py-8">
            <div className="text-5xl mb-4">✨</div>
            <h3 className="text-xl font-bold font-serif text-[#8B1E41] mb-2">আপনার দোয়া ও শুভকামনা লিখুন</h3>
            <p className="text-gray-600 mb-8 text-sm">দোয়া লিখতে আপনার গুগল আইডি ব্যবহার করুন, যাতে আমরা আপনাকে চিনতে পারি।</p>
            <button 
              onClick={handleLogin}
              className="bg-white border border-gray-200 text-gray-700 px-8 py-3 rounded-full shadow-sm hover:bg-gray-50 hover:shadow transition flex items-center justify-center gap-3 mx-auto font-medium"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Google দিয়ে লগইন করুন
            </button>
          </div>
        ) : (
          <div className="bg-white p-5 rounded-[20px] shadow-sm border border-rose-100 max-w-2xl mx-auto">
            <p className="text-[#8B1E41] font-semibold mb-3 text-sm text-center">
              Leave a wish for the couple...
            </p>
            <form onSubmit={handleSubmit}>
              <textarea
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Write your beautiful message here..."
                className="w-full bg-gray-50 border border-gray-200 rounded-xl p-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300 resize-none transition-all text-center"
                rows="2"
                required
              ></textarea>
              <div className="flex justify-center mt-3">
                <button 
                  type="submit" 
                  disabled={isSubmitting || !newMessage.trim()}
                  className="bg-[#8B1E41] text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-md hover:bg-rose-900 transition flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message 💌'}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>

      {/* আগের মেসেজগুলো দেখানোর সেকশন */}
      <div>
        <div className="flex items-center gap-2 border-b border-rose-200 pb-3 mb-6">
          <h3 className="text-xl font-serif text-[#8B1E41] font-bold">সব শুভকামনা</h3>
          <span className="bg-rose-100 text-[#8B1E41] px-2 py-0.5 rounded-full text-sm font-bold">{messages.length}</span>
        </div>
        
        <div className="space-y-4">
          {messages.length === 0 ? (
            <div className="text-center bg-white p-8 rounded-3xl border border-dashed border-rose-200">
              <p className="text-gray-400">এখনো কেউ শুভকামনা জানায়নি।<br/>আপনিই প্রথম হোন!</p>
            </div>
          ) : (
            messages.map((msg) => (
              <div key={msg.id} className="bg-white p-5 rounded-3xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] border border-rose-50 flex gap-4 transition hover:shadow-md">
                <img 
                  src={msg.userPhoto || `https://ui-avatars.com/api/?name=${msg.userName || 'Guest'}&background=8B1E41&color=fff`} 
                  alt={msg.userName} 
                  className="w-12 h-12 rounded-full border border-rose-100 shrink-0 object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-800">{msg.userName}</h4>
                  <p className="text-xs text-rose-400 mb-2 font-medium">
                    {msg.timestamp ? new Date(msg.timestamp.toDate()).toLocaleDateString('bn-BD', {
                      day: 'numeric', month: 'short', year: 'numeric'
                    }) : 'এইমাত্র'}
                  </p>
                  <p className="text-gray-600 leading-relaxed whitespace-pre-wrap text-sm md:text-base">{msg.text}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      
    </div>
  );
}

export default GuestBook;