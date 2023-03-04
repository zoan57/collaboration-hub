import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../firebase";
import {
  doc,
  deleteDoc,
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import TruncateText from "../components/TruncateText";
export const DeleteDoc = async (collectionName, documentID) => {
  try {
    if (collection && document) {
      const docRef = doc(db, collectionName, documentID);
      await deleteDoc(docRef);
      console.log("Project deleted successfully!");
      alert("Project deleted successfully!");
    }
  } catch (error) {
    console.error("Error deleting project:", error);
  }
};
