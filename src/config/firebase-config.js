//The core Firebase JS SDK is always required and must be listed first
importScripts("https://www.gstatic.com/firebasejs/7.14.6/firebase-app.js");

//TODO: Add SDKs for Firebase products that you want to use https://firebase.google.com/docs/web/setup#available-libraries 

// Your Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBORqWbbMJocP5u5rNNAvXqW2bPjQygKK4",
    authDomain: "note-sharing-app-1f607.firebaseapp.com",
    databaseURL: "https://note-sharing-app-1f607.firebaseio.com",
    projectId: "note-sharing-app-1f607",
    storageBucket: "note-sharing-app-1f607.appspot.com",
    messagingSenderId: "689331539874",
    appId: "1:689331539874:web:de12794073c22a08512cfb",
    measurementId: "G-0GWYYEG44Y"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

