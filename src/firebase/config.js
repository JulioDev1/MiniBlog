import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBhF115Rs49z-Ozyj33nyn5EcBlhSCLX_M",
  authDomain: "mini-blog-801ab.firebaseapp.com",
  projectId: "mini-blog-801ab",
  storageBucket: "mini-blog-801ab.appspot.com",
  messagingSenderId: "343485746810",
  appId: "1:343485746810:web:7817c44b7364c017c3f5c3",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
