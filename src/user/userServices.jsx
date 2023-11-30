import { db } from "../firebase-config";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const userCollectionRef = collection(db, "user");
class userDataService {
  addusers = (newuser) => {
    return addDoc(userCollectionRef, newuser);
  };

  updateuser = (id, updateduser) => {
    const userDoc = doc(db, "user", id);
    return updateDoc(userDoc, updateduser);
  };

  deleteuser = async (id) => {
    try {
      const userDoc = doc(db, "user", id);
      await deleteDoc(userDoc);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  getAllusers = () => {
    return getDocs(userCollectionRef);
  };

  getuser = (id) => {
    const userDoc = doc(db, "user", id);
    return getDoc(userDoc);
  };
}

export default new userDataService();
