import firebase from "firebase/app";
import "firebase/auth";
const app = firebase.initializeApp({
  apiKey: "AIzaSyCkBcnUgGzfC8841MUZQ4-0XvOHFLJx4Nc",
  authDomain: "videostreaming-796bd.firebaseapp.com",
  databaseURL: "https://videostreaming-796bd.firebaseio.com",
  projectId: "videostreaming-796bd",
  storageBucket: "videostreaming-796bd.appspot.com",
  messagingSenderId: "261110956967",
  appId: "1:261110956967:web:fbacad03170c1c3788ac82",
  measurementId: "G-DBC1HV8GTH",
});

export const auth = app.auth();
export default app;
