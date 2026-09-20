import { db } from '../config/firebaseConfig';
import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  serverTimestamp,
  deleteDoc,
  doc,
  Timestamp
} from 'firebase/firestore';

// -------------------------------------------------------
// IMPORTANT: localStorage is REMOVED completely.
// All feedbacks are stored & fetched ONLY from Firestore
// so every user sees the same data.
// -------------------------------------------------------

export const saveFeedback = async (feedbackData) => {
  const feedbackRef = collection(db, 'feedbacks');
  const docRef = await addDoc(feedbackRef, {
    userName: feedbackData.userName || 'Anonymous Yatri',
    userEmail: feedbackData.userEmail || '',
    photoURL: feedbackData.photoURL || '',
    rating: feedbackData.rating || 5,
    category: feedbackData.category || 'General Feedback',
    message: feedbackData.message,
    createdAt: serverTimestamp(),
  });

  // Return a local representation so UI can use it immediately
  return {
    id: docRef.id,
    userName: feedbackData.userName || 'Anonymous Yatri',
    userEmail: feedbackData.userEmail || '',
    photoURL: feedbackData.photoURL || '',
    rating: feedbackData.rating || 5,
    category: feedbackData.category || 'General Feedback',
    message: feedbackData.message,
    createdAt: new Date().toISOString(),
  };
};

export const fetchAllFeedbacks = async () => {
  const q = query(collection(db, 'feedbacks'), orderBy('createdAt', 'desc'));
  const snapshot = await getDocs(q);

  return snapshot.docs.map((docSnap) => {
    const data = docSnap.data();
    // Firestore Timestamp → ISO string so it can be used anywhere
    let createdAt = data.createdAt;
    if (createdAt instanceof Timestamp) {
      createdAt = createdAt.toDate().toISOString();
    } else if (!createdAt) {
      createdAt = new Date().toISOString();
    }
    return {
      id: docSnap.id,
      ...data,
      createdAt,
    };
  });
};

export const deleteFeedbackItem = async (id) => {
  await deleteDoc(doc(db, 'feedbacks', id));
};
