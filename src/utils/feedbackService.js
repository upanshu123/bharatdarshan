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
  }
];

export const getLocalFeedbacks = () => {
  try {
    const data = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!data) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(DEFAULT_FEEDBACKS));
      return DEFAULT_FEEDBACKS;
    }
    return JSON.parse(data);
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

  // Deduplicate local and firestore lists by id or message
  const combinedMap = new Map();
  [...firestoreList, ...localList].forEach(item => {
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
