import { dbLite } from "..";
import {
  setDoc,
  doc,
  collection,
  addDoc,
  getDocs,
  getDoc,
  updateDoc,
} from "firebase/firestore/lite";

export const addDocumentLite = async (collectionName, data) => {
  try {
    const collectionRef = collection(dbLite, collectionName);
    const docRef = await addDoc(collectionRef, { ...data, id: "" });

    await updateDoc(docRef, { id: docRef.id });

    return docRef.id;
  } catch (error) {
    console.error(error);
  }
};

export const getDocumentsLite = async (DocumentName) => {
  try {
    const documentsData = collection(dbLite, DocumentName);
    const DocumentSnapShot = await getDocs(documentsData);
    const cityList = DocumentSnapShot.docs.map((doc) => doc.data());
    return cityList;
  } catch (error) {
    console.error(error);
  }
};

export const getDocumentLite = async (DocumentName, DocumentId) => {
  try {
    const collectionRef = collection(dbLite, DocumentName);
    const documenetRef = doc(collectionRef, DocumentId);
    const DocumentSnapShot = await getDoc(documenetRef);
    if (DocumentSnapShot.exists()) {
      return DocumentSnapShot.data();
    } else {
      console.log("error getting document");
    }
  } catch (error) {
    console.error(error);
  }
};

export const updaDocumentLite = async (collectionName, data) => {
  try {
    await dbLite.collection(collectionName).update(data);
    console.log("Updated successfully");
  } catch (error) {
    console.error(error);
  }
};

export const delDocumentLite = async (collectionName, id) => {
  try {
    await dbLite.collection(collectionName).doc(id).delete();
    console.log("Deleted successfully");
  } catch (error) {
    console.error(error);
  }
};
