importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyAAdFeMRYl5bdm13t82Mby-B7ZLp-2PtiE",
    authDomain: "zi-meet.firebaseapp.com",
    projectId: "zi-meet",
    storageBucket: "zi-meet.firebasestorage.app",
    messagingSenderId: "359763034375",
    appId: "1:359763034375:web:55a116c49a368d7bddc5a2",
    measurementId: "G-P9GT5DMXSJ"
});

const messaging = firebase.messaging();