import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";

export const initializeLoginFramework = () => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
};

// store userInfo to localStorage
export const storeUserInfo = (data) => {
  localStorage.setItem("userInfo", JSON.stringify(data));
};

//Google signIn
export const handleGoogleSignIn = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then((result) => {
      if (result) {
        const { displayName, email, photoURL } = result.user;
        const signedInUser = {
          name: displayName,
          email: email,
          image: photoURL,
          success: true,
        };
        storeUserInfo(signedInUser);
        return signedInUser;
      }
    })
    .catch((error) => {
      // console.log(errorCode, errorMessage);
    });
};

//Facebook signIn
export const handleFacebookSignIn = () => {
  const facebookProvider = new firebase.auth.FacebookAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(facebookProvider)
    .then((result) => {
      if (result) {
        const { displayName, email, photoURL } = result.user;
        const signedInUser = {
          name: displayName,
          email: email,
          image: photoURL,
          success: true,
        };
        storeUserInfo(signedInUser);
        return signedInUser;
      }
    })
    .catch((error) => {
      // alert("Something went wrong! Please try again");
      // console.log(errorCode, errorMessage);
    });
};

export const createUserWithEmailAndPassword = (email, password) => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((res) => {
      // Signed up
      if (res?.user) {
        const newUserInfo = res.user;
        newUserInfo.success = true;
        return newUserInfo;
      }
    })
    .catch((error) => {
      const newUserInfo = {};
      newUserInfo.error =
        error?.message ||
        "The email address is already in use by another account";
      //   alert("The email address is already in use by another account");
      newUserInfo.success = false;
      return newUserInfo;
    });
};

export const signInWithEmailAndPassword = (email, password) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      // Signed in
      if (res?.user) {
        const newUserInfo = res.user;
        newUserInfo.success = true;
        return newUserInfo;
      }
    })
    .catch((error) => {
      const newUserInfo = {};
      newUserInfo.error = error.message;
      newUserInfo.success = false;
      return newUserInfo;
    });
};
