
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
  import { getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
   } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
  import { 
    getFirestore,
    doc,
    setDoc,
    getDoc,
    getDocs,
    collection,
    addDoc,
    updateDoc,
    arrayUnion,
    arrayRemove,
    query,
    where,
    deleteDoc,
   } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
  import { 
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL
   } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-storage.js";

   const firebaseConfig = {
    apiKey: "AIzaSyDGAP1v1lwE4vv_AzQ5xqh3-X85ZDiNgRk",
    authDomain: "genial-insight-401816.firebaseapp.com",
    projectId: "genial-insight-401816",
    storageBucket: "genial-insight-401816.appspot.com",
    messagingSenderId: "1021841987281",
    appId: "1:1021841987281:web:1b262f3d392ab4e127d7f0",
    measurementId: "G-BL0LPLY391"
  };


  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const storage = getStorage(app);

  export {
    auth,
    db,
    storage, 
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    doc,
    setDoc,
    ref,
    uploadBytes,
    getDownloadURL,
    signOut,
    getDoc,
    getDocs,
    collection,
    addDoc,
    updateDoc,
    arrayUnion,
    arrayRemove,
    query,
    where,
    deleteDoc,
  };

