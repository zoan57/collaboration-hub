import React from "react";
import { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import { collection } from "firebase/firestore";

const useFirestoreCollection = (collectionName) => {
  const [cache, setCache] = useState([]);
  const [snapshots, loading, error] = useCollection(
    collection(db, collectionName)
  );
  useEffect(() => {
    if (!loading && !error) {
      // Convert the Firestore snapshot to an array of objects
      const newCache = snapshots.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Update the cache if the data has changed
      if (JSON.stringify(cache) !== JSON.stringify(newCache)) {
        setCache(newCache);
        console.log(newCache)
      }
    }
  }, [snapshots, loading, error]);

  return [cache, loading, error];
};

export default useFirestoreCollection;
