import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCRUhfUZtzYo8BeaE35bw3glMBIS7sd7h8",
    authDomain: "whats-app-clone-90197.firebaseapp.com",
    databaseURL: "https://whats-app-clone-90197.firebaseio.com",
    projectId: "whats-app-clone-90197",
    storageBucket: "whats-app-clone-90197.appspot.com",
    messagingSenderId: "973975759669",
    appId: "1:973975759669:web:dff28d8034c7e7a24efa7c",
    measurementId: "G-QK52PD1PB7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;