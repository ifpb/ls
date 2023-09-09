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
import { db } from './api.js';

async function create(resource, data) {
  data.created_at = new Date(data.created_at);

  const colRef = collection(db, resource);

  const docRef = await addDoc(colRef, data);

  return { ...data, id: docRef.id };
}

async function read(resource, filter, value) {
  const data = [];

  const colRef = collection(db, resource);

  let docs;

  if (filter && value) {
    const q = query(colRef, where(filter, '==', value));

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
