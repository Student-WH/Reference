# Reference

STYLE SHEET

 submitButton :{
      backgroundColor: '#FBC02D',
      width: 100,
      height : 50
    },
      submitButtonText:{
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
    fontWeight:"bold",
    color: 'white'
  }
  
  
CONFIG.JS
  
import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyDubZIFFfNGK5uphm2zdZ9DsiyCck98cZ8",
  authDomain: "wily-app-8b2a2.firebaseapp.com",
  projectId: "wily-app-8b2a2",
  storageBucket: "wily-app-8b2a2.appspot.com",
  messagingSenderId: "689875211740",
  appId: "1:689875211740:web:84a650605a76262deaeb19"
};

  if(!firebase.apps.length)
{
firebase.initializeApp(firebaseConfig)
}
export default firebase.firestore();
  
  
  
