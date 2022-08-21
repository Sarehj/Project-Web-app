import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
import  {getAuth} from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyBpYgHgSY9otTUntnKf2zbnhCnrqEPOC0Q",
    authDomain: "my-project-851c6.firebaseapp.com",
    projectId: "my-project-851c6",
    storageBucket: "my-project-851c6.appspot.com",
    messagingSenderId: "408747607034",
    appId: "1:408747607034:web:3f55e58d800b12057c5a43",
    // measurementId: "${config.measurementId}"
  };
  const app = firebase.initializeApp(firebaseConfig); 
  
  export const db = app.firestore();
  export const auth = getAuth(app);
  export default app;