import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import { db } from './firebase.js';

async function create(resource, data) {
  data.created_at = new Date(data.created_at);

  const colRef = collection(db, resource);

  const docRef = await addDoc(colRef, data);

  return { ...data, id: docRef.id };
}

async function read(resource, filter) {
  const data = [];

  const colRef = collection(db, resource);

  let docs;

  if (!!filter) {
    const q = query(
      colRef,
      ...Object.keys(filter).map((key) => where(key, '==', filter[key]))
    );

    docs = await getDocs(q);
  } else {
    docs = await getDocs(colRef);
  }

  docs.forEach((docRef) => data.push({ ...docRef.data(), id: docRef.id }));

  return data;
}

async function update(resource, data) {
  data.created_at = new Date(data.created_at);

  const docRef = doc(db, resource, data.id);

  await updateDoc(docRef, data);

  return data;
}

async function remove(resource, id) {
  const docRef = doc(db, resource, id);

  return await deleteDoc(docRef);
}

export default { create, read, update, remove };
