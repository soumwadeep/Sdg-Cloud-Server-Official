// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCToUfOtoyEnOZCu49oVDJy9YviIpBs8a8",
    authDomain: "sdg-cloud-server-hub.firebaseapp.com",
    projectId: "sdg-cloud-server-hub",
    storageBucket: "sdg-cloud-server-hub.appspot.com",
    messagingSenderId: "609514883727",
    appId: "1:609514883727:web:ea725848990f295734befa"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

  // Sign In
signIn.addEventListener('click', (e) => {

  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert("Welcome : " + user.email + "! Now You Can Access Our Files!");
    window.location.href = "dashboard/dashboard.html";
    // ...
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

  //add an alert for errors
  alert(errorMessage);
    });
});