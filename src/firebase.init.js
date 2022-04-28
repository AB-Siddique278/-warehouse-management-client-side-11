
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDvxl9BTUAgCKbSLEhRsaTH5jnkjlNDRms",
  authDomain: "fruits-basket-b1fcb.firebaseapp.com",
  projectId: "fruits-basket-b1fcb",
  storageBucket: "fruits-basket-b1fcb.appspot.com",
  messagingSenderId: "847543292361",
  appId: "1:847543292361:web:4a2b0fc12c1c4504ae1818"
};


const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
export default auth;


