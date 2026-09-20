import { db } from '../config/firebaseConfig';
import { collection, addDoc, getDocs, query, orderBy, serverTimestamp, deleteDoc, doc } from 'firebase/firestore';

const LOCAL_STORAGE_KEY = 'bharatdarshan_feedbacks';

// Initial sample feedbacks if none exist
const DEFAULT_FEEDBACKS = [
  {
    id: 'sample-1',
    userName: 'Aarav Sharma',
    userEmail: 'aarav.sharma@example.com',
    rating: 5,
    category: 'UI & Design',
    message: 'BharatDarshan project ka UI aur animations bohot hi awesome hain! Soul of India vibe exact feeling deta hai.',
    createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
    photoURL: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80'
  },
  {
    id: 'sample-2',
    userName: 'Priya Verma',
    userEmail: 'priya.v@example.com',
    rating: 5,
    category: 'Plan My Yatra',
    message: 'Plan My Yatra feature se customized trip itinerary banana bohot aasan ho gaya. Brilliant work by the developer!',
    createdAt: new Date(Date.now() - 86400000 * 1).toISOString(),
    photoURL: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80'
  },
  {
    id: 'sample-3',
    userName: 'Rohan Mehta',
    userEmail: 'rohan.mehta@example.com',
    rating: 5,
    category: 'Plan My Yatra',
    message: 'AI Itinerary engine budget and hotels/dining suggestions perfectly calculate karta hai. 1-click Google location links super helpful hain!',
    createdAt: new Date(Date.now() - 86400000 * 3).toISOString(),
    photoURL: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&auto=format&fit=crop&q=80'
  },
  {
    id: 'sample-4',
    userName: 'Ananya Deshmukh',
    userEmail: 'ananya.d@example.com',
    rating: 5,
    category: 'UI & Design',
    message: 'Top Destinations list aur state-wise search clean aur user-friendly hai. Dark mode UI aesthetics standout lagte hain.',
    createdAt: new Date(Date.now() - 86400000 * 4).toISOString(),
    photoURL: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format&fit=crop&q=80'
  },
  {
    id: 'sample-5',
    userName: 'Vikramaditya Singh',
    userEmail: 'vikram.singh@example.com',
    rating: 5,
    category: 'Feature Request',
    message: 'Nearest Railway Station aur Bus Stand locations Google Maps integration ke saath bohot exact milti hain. Extremely practical!',
    createdAt: new Date(Date.now() - 86400000 * 5).toISOString(),
    photoURL: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80'
  },
  {
    id: 'sample-6',
    userName: 'Sneha Patel',
    userEmail: 'sneha.p@example.com',
    rating: 5,
    category: 'General Feedback',
    message: 'Spiritual & Heritage destinations section super peaceful feel deta hai. Detailed travel guides bohot rich hain.',
    createdAt: new Date(Date.now() - 86400000 * 6).toISOString(),
    photoURL: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80'
  },
  {
    id: 'sample-7',
    userName: 'Kabir Roy',
    userEmail: 'kabir.roy@example.com',
    rating: 5,
    category: 'UI & Design',
    message: 'Mobile responsiveness aur smooth transitions site ko app-like feeling dete hain. Outstanding work!',
    createdAt: new Date(Date.now() - 86400000 * 7).toISOString(),
    photoURL: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80'
  },
  {
    id: 'sample-8',
    userName: 'Divya Nair',
    userEmail: 'divya.nair@example.com',
    rating: 5,
    category: 'Plan My Yatra',
    message: 'Budget tier options (Budget, Comfort, Luxury) me hotels aur dining exact price bracket ke according sort hoti hain.',
    createdAt: new Date(Date.now() - 86400000 * 8).toISOString(),
    photoURL: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80'
  },
  {
    id: 'sample-9',
    userName: 'Amit Kumar',
    userEmail: 'amit.k@example.com',
    rating: 5,
    category: 'Feature Request',
    message: '1-click Google Maps links for trains, buses & flights saves so much time while planning travel!',
    createdAt: new Date(Date.now() - 86400000 * 9).toISOString(),
    photoURL: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop&q=80'
  },
  {
    id: 'sample-10',
    userName: 'Meera Iyer',
    userEmail: 'meera.iyer@example.com',
    rating: 5,
    category: 'General Feedback',
    message: 'Feedback system aur community suggestions feature se Yatri community connect me rehti hai. Great platform!',
    createdAt: new Date(Date.now() - 86400000 * 10).toISOString(),
    photoURL: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80'
  }
];

export const getLocalFeedbacks = () => {
  try {
    const data = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!data) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(DEFAULT_FEEDBACKS));
      return DEFAULT_FEEDBACKS;
    }
    const parsed = JSON.parse(data);
    // Ensure all default items are merged if missing
    const combinedMap = new Map();
    [...parsed, ...DEFAULT_FEEDBACKS].forEach(item => {
      if (item.id && !combinedMap.has(item.id)) {
        combinedMap.set(item.id, item);
      }
    });
    const result = Array.from(combinedMap.values());
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(result));
    return result;
  } catch (e) {
    console.warn('LocalStorage error:', e);
    return DEFAULT_FEEDBACKS;
  }
};

export const saveFeedback = async (feedbackData) => {
  const newFeedback = {
    id: 'fb-' + Date.now(),
    userName: feedbackData.userName || 'Anonymous Yatri',
    userEmail: feedbackData.userEmail || 'yatri@bharatdarshan.com',
    photoURL: feedbackData.photoURL || '',
    rating: feedbackData.rating || 5,
    category: feedbackData.category || 'General',
    message: feedbackData.message,
    createdAt: new Date().toISOString()
  };

  // 1. Save locally first (instant UI update)
  const currentLocal = getLocalFeedbacks();
  const updatedLocal = [newFeedback, ...currentLocal];
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedLocal));
  } catch (e) {
    console.warn('Failed to save to localStorage:', e);
  }

  // 2. Save to Firestore if available
  try {
    const feedbackRef = collection(db, 'feedbacks');
    await addDoc(feedbackRef, {
      ...newFeedback,
      firestoreTimestamp: serverTimestamp()
    });
  } catch (err) {
    console.warn('Firestore write warning (saved locally):', err.message);
  }

  return newFeedback;
};

export const fetchAllFeedbacks = async () => {
  const localList = getLocalFeedbacks();
  let firestoreList = [];

  try {
    const q = query(collection(db, 'feedbacks'), orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(q);
    firestoreList = snapshot.docs.map(docSnap => ({
      id: docSnap.id,
      ...docSnap.data()
    }));
  } catch (err) {
    console.warn('Firestore fetch warning (using local list):', err.message);
  }

  // Deduplicate local, firestore and default lists by id
  const combinedMap = new Map();
  [...firestoreList, ...localList, ...DEFAULT_FEEDBACKS].forEach(item => {
    if (item.id && !combinedMap.has(item.id)) {
      combinedMap.set(item.id, item);
    }
  });

  return Array.from(combinedMap.values());
};

export const deleteFeedbackItem = async (id) => {
  // Delete locally
  const currentLocal = getLocalFeedbacks();
  const updatedLocal = currentLocal.filter(item => item.id !== id);
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedLocal));

  // Delete from Firestore if possible
  try {
    await deleteDoc(doc(db, 'feedbacks', id));
  } catch (err) {
    console.warn('Firestore delete warning:', err.message);
  }
};
