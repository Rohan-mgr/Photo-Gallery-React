import { useState, useEffect } from "react";
import { uploadBytesResumable } from "firebase/storage";
import { serverTimestamp } from "firebase/firestore";
import {
  storage,
  ref,
  getDownloadURL,
  firestore,
} from "../firebaseConfig/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storageRef = ref(storage, `images/${file.name}`);
    const firestoreCollectionRef = collection(firestore, "images");
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percentage = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
          addDoc(firestoreCollectionRef, {
            url: downloadUrl,
            createdAt: serverTimestamp(),
          })
            .then((docRef) =>
              console.log("Document written with ID: ", docRef.id)
            )
            .catch((err) => {
              console.error("Error adding document: ", err);
            });
          setUrl(downloadUrl);
        });
      }
    );
  }, [file]);
  return { progress, url, error };
};
export default useStorage;
