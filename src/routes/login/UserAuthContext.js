import { createContext, useContext, useEffect, useState } from "react";
import {
  // signInWithRedirect,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth, database } from "../../utils/firebase";
import { collection, setDoc, getDocs, doc, getDoc } from "firebase/firestore";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  const collectRef = collection(database, "users");
  // // const q = query(collectRef, where(id, "==", user.uid));
  // // console.log(user.uid);

  //push to firebase
  async function handleSubmit(
    fullname,
    companyName,
    companyAddress,
    skill,
    permanentAddress,
    about
  ) {
    const docRef = await setDoc(doc(collectRef, user.uid), {
      fullname: fullname,
      companyName: companyName,
      companyAddress: companyAddress,
      skill: skill,
      permanentAddress: permanentAddress,
      about: about,
    });

    console.log("Document written with ID: ", docRef.id);
  }

  //.........  //pull from firebase

  // // const [show, setShow] = useState("");

  // const getData = () => {
  //   const docRef = doc(database, "users", user.uid);

  //   getDocs(docRef).then((response) => {
  //     console.log(
  //       response.docs.map((item) => {
  //         return { ...item.data(), id: item.id };
  //       })
  //     );
  //   });
  // };

  // console.log(user.uid);
  // getData();
  // useEffect(() => {}, []);

  //.........  //pull from firebase

  const [show, setShow] = useState("");

  async function getData() {
    const docRef = doc(database, "users", user.uid);
    const docSnap = await getDoc(docRef);
    setShow(docSnap.data());
    // console.log("Document data:", docSnap.data());
  }

  getData();
  // useEffect(() => {
  //   setInterval(() => {
  //   }, 1500);
  // }, []);

  // .................................
  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    return signOut(auth);
  }

  const googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters({
    prompt: "select_account",
  });

  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
    // signInWithRedirect(auth, provider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      // console.log("Auth", currentuser);

      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{
        getData,
        show,
        handleSubmit,
        user,
        logIn,
        signUp,
        logOut,
        googleSignIn,
      }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
