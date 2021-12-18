import { initializeApp } from "firebase/app";
import firebaseConfig from "./FirebaseConfig";

const InitializationApp = () => {
    return initializeApp(firebaseConfig);
};

export default InitializationApp;