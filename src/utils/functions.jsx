import firebase from "./firebase";
import { useState, useEffect } from "react";

import {
  getDatabase,
  ref,
  push,
  set,
  onValue,
  remove,
  update,
} from "firebase/database";
import ToastifySuccess from "./toastfy";

export const AddData = (values) => {
  // Create a new post reference with an auto-generated id
  const db = getDatabase(firebase);
  const postListRef = ref(db, "users");
  const newPostRef = push(postListRef);
  set(newPostRef, {
    username: values.username,
    phone: values.phone,
    gender: values.gender,
  });
};

export const GetUser = () => {
  const [contactList, setContactList] = useState();
  useEffect(() => {
    const db = getDatabase();
    const userRef = ref(db, "users");
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      const baglantiArray = [];

      for (let id in data) {
        baglantiArray.push({ id, ...data[id] });
      }
      setContactList(baglantiArray);
    });
  }, []);
  return { contactList };
};

// !Get user için ikinci opsiyon kod bloğu..
// useEffect(() => {
//   onValue(ref(db), (snapshot) => {
//     setTodos([]);
//     const data = snapshot.val();
//     if (data !== null) {
//       Object.values(data).map((todo) => {
//         setTodos((oldArray) => [...oldArray, todo]);
//       });
//     }
//   });
// }, []);

export const DeleteUser = (id) => {
  const db = getDatabase();
  remove(ref(db, "users/" + id));
  ToastifySuccess("Veri silindi..");
};

export const EditUser = (values) => {
  const db = getDatabase(firebase);
  const updates = {};
  updates["users/" + values.id] = values;
  return update(ref(db), updates);
};
