import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/functions";

export const config = {
    apiKey: "AIzaSyD8NZfmInAtl-7Kfi_JO_Ib91vmDVtVYjI",
    authDomain: "data-tree-6dba7.firebaseapp.com",
    databaseURL: "https://data-tree-6dba7.firebaseio.com",
    projectId: "data-tree-6dba7",
    storageBucket: "data-tree-6dba7.appspot.com",
    messagingSenderId: "1089939900339",
    appId: "1:1089939900339:web:d348c4aa96c9777ef6edc6",
};

firebase.initializeApp(config);

export default firebase;

export const app = firebase.app();
export const firestore = firebase.firestore();
if (location.hostname === "localhost") {
    firestore.settings({
        host: "localhost:8080",
        ssl: false,
    });
}

firebase.functions().useFunctionsEmulator("http://localhost:5001");

export const getCollections = (path?: string | undefined) =>
    firebase
        .functions()
        .httpsCallable("getCollections")({ path })
        .then((result) => result.data.collections)
        .catch((error) => {
            console.log(error);
        });

export const getDocuments = (path: string, callback) =>
    firestore
        .collection(path)
        .onSnapshot((snapshot) => callback(snapshot.docs.map((doc) => doc.data())));
