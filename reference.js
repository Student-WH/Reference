

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
  







  checkStudentEligibilityForBookIssue = async () => {
    const studentRef = await db
      .collection("students")
      .where("studentId", "==", this.state.scannedStudentId)
      .get();
    var isStudentEligible = "";
    if (studentRef.docs.length == 0) {
      this.setState({
        scannedStudentId: "",
        scannedBookId: ""
      });
      isStudentEligible = false;
      Alert.alert("The student id doesn't exist in the database!");
    } else {
      studentRef.docs.map(doc => {
        var student = doc.data();
        if (student.numberOfBooksIssued < 2) {
          isStudentEligible = true;
        } else {
          isStudentEligible = false;
          Alert.alert("The student has already issued 2 books!");
          this.setState({
            scannedStudentId: "",
            scannedBookId: ""
          });
        }
      });
    }

    return isStudentEligible;
  }
  
  
  
  
  
  
  
    checkBookEligibility = async () => {
    const bookRef = await db
      .collection("books")
      .where("bookId", "==", this.state.scannedBookId)
      .get();
    var transactionType = "";
    if (bookRef.docs.length == 0) {
      transactionType = false;
    } else {
      bookRef.docs.map(doc => {
        var book = doc.data();
        if (book.bookAvailability) {
          transactionType = "Issue";
        } else {
          transactionType = "Return";
        }
      });
    }

    return transactionType;
  };
  
  
