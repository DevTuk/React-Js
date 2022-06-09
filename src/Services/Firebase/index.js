import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAUEzXD6McQyPz_qHnUD6vWjn3oZXWBxms',
  authDomain: 'artemi-d44e1.firebaseapp.com',
  projectId: 'artemi-d44e1',
  storageBucket: 'artemi-d44e1.appspot.com',
  messagingSenderId: '800123595935',
  appId: '1:800123595935:web:a8ab906eb8cb3b0a1ec6aa',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
