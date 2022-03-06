import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider , onAuthStateChanged } from "firebase/auth";


const useFirebase = () => {
const [user,setUser] = useState({});
const provider = new GoogleAuthProvider();
const auth = getAuth();

const signInWithGoogle =()=>{
    signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}

useEffect(()=>{
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
   setUser(user);
  } 
});
},[])

const signOut = () =>{

    const auth = getAuth();
signOut(auth)
.then(() => {
setUser({})
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});

}




    return {
        user,
        signInWithGoogle,
        signOut
    }
};

export default useFirebase;