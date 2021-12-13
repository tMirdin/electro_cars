import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyARgPCVZjmOk5M3h8yd56gJ_DNzUfdRM-E",
  authDomain: "electro-cars-auth.firebaseapp.com",
  projectId: "electro-cars-auth",
  storageBucket: "electro-cars-auth.appspot.com",
  messagingSenderId: "124833197037",
  appId: "1:124833197037:web:885f233de8bb76eff355e4",
};
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
