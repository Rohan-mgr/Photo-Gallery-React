import { useState, useEffect } from "react";
import { firestore } from "../firebaseConfig/firebaseConfig";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

function useFirestore(collections) {
  const [docs, setDocs] = useState([]);
  const [imgCollection, setImgCollection] = useState(true);
  useEffect(() => {
    const firestoreCollectionRef = collection(firestore, collections);
    const q = query(firestoreCollectionRef, orderBy("createdAt", "desc"));
    const unSub = onSnapshot(q, (snapshot) => {
      let document = [];
      console.log(snapshot.docs.length);
      if (snapshot.docs.length === 0) {
        setImgCollection(false);
      }
      snapshot.forEach((doc) => {
        document.push({ ...doc.data(), id: doc.id });
      });
      setDocs(document);
    });
    return () => unSub();
  }, [collections, imgCollection]);
  return { docs, imgCollection };
}

export default useFirestore;
