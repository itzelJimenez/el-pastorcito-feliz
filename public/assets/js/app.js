var config = {
 	apiKey: "AIzaSyBbap4tGjT9kPewQTOyzkjKWbjIK8vpUzE",
 	authDomain: "primer-proyecto-de-sue.firebaseapp.com",
 	databaseURL: "https://primer-proyecto-de-sue.firebaseio.com",
 	projectId: "primer-proyecto-de-sue",
 	storageBucket: "primer-proyecto-de-sue.appspot.com",
 	messagingSenderId: "463944533678"
 };

 firebase.initializeApp(config);

/*traemos botones*/

var $btnFacebook = $("#id-facebook");
var $btnTwitter = $("#id-twitter");
var $btnGoogle = $("#id-google");

$btnFacebook.click(loginWithFace);
$btnTwitter.click(loginWithTwitter);
$btnGoogle.click(loginWithGoogle);



function logIn(provider){
	firebase.auth().signInWithPopup(provider).then(function (result) {
 		var token = result.credential.accessToken;
 		var user = result.user;
 		 console.log('user', user);
		console.log(user.displayName)
 	}).catch(function (error) { 
 		var errorCode = error.code;
 		var errorMessage = error.message;
 		var email = error.email;
 		var credential = error.credential;

		console.log('error', error);
 	});
	
}

 function loginWithFace(provider) {
 	var provider = new firebase.auth.FacebookAuthProvider();
	logIn(provider);
 }

function loginWithTwitter(provider) {
 	var provider = new firebase.auth.TwitterAuthProvider();
	logIn(provider);
 }

function loginWithGoogle(provider) {
 	var provider = new firebase.auth.GoogleAuthProvider();
	logIn(provider);
 }

