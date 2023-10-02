// Import the functions you need from the SDKs you need
import * as firebase from 'firebase'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAS3_fRNZiH69H4R1_PLJE8wy-yeWETdw",
  authDomain: "teste-auth-6f779.firebaseapp.com",
  projectId: "teste-auth-6f779",
  storageBucket: "teste-auth-6f779.appspot.com",
  messagingSenderId: "113744318196",
  appId: "1:113744318196:web:5cc87365a7af9244b398a1",
  measurementId: "G-FGFXE3MLPZ"
};

// Initialize Firebase
let app;

if (firebase.apps.lenght === 0){
    app = initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()
const analytics = getAnalytics(app);

export {auth};