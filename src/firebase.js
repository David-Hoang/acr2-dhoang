import firebase from "firebase/app";
import "firebase/database";

let config = {
    apiKey: "AIzaSyAaGhE9S9E83CnPjBOEqJhduHO2ye5f9GE",
    authDomain: "acr2-dhoang.firebaseapp.com",
    projectId: "acr2-dhoang",
    databaseURL: "https://acr2-dhoang-default-rtdb.asia-southeast1.firebasedatabase.app/",
    storageBucket: "acr2-dhoang.appspot.com",
    messagingSenderId: "1036885451036",
    appId: "1:1036885451036:web:40ca66276f6d352326dad9"
};

firebase.initializeApp(config);

export default firebase.database();