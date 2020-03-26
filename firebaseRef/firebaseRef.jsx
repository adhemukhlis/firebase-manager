import firebase from "./firebaseInit";
export const rootRef = firebase.database().ref().child('regional');
