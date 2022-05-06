// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, onAuthStateChanged , signOut } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
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

const user = auth.currentUser;
	onAuthStateChanged(auth, (user) => {
  		if (user) {
    	// User is signed in, see docs for a list of available properties
    	// https://firebase.google.com/docs/reference/js/firebase.User
    	const uid = user.uid;
        // alert("Welcome: " + user.email + "! Now You Can Access Our Files!");
    	// ...
  		} else {
    	// User is signed out
            window.location.href = "https://sdgcloudserver.com/";
    	// ...
  		}
	});
    // Sign Out
    logOut.addEventListener('click', (e) => {
        signOut(auth).then(() => {
            // Sign-out successful.
            alert("Bye! We Hope To Meet You Soon Again!");
            window.location.href = "https://sdgcloudserver.com/";
          }).catch((error) => {
            // An error happened.
            const errorCode = error.code;
    	    const errorMessage = error.message;
            //add an alert for errors
		    alert(errorMessage);
        });
    });