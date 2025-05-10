import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyAAdFeMRYl5bdm13t82Mby-B7ZLp-2PtiE",
    authDomain: "zi-meet.firebaseapp.com",
    projectId: "zi-meet",
    storageBucket: "zi-meet.firebasestorage.app",
    messagingSenderId: "359763034375",
    appId: "1:359763034375:web:55a116c49a368d7bddc5a2",
    measurementId: "G-P9GT5DMXSJ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const messaging = getMessaging(app);

export { app, analytics, messaging, getToken, onMessage };