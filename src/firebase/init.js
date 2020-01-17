import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: 'AIzaSyDxQ_6q6mF5vdyeBTro-8yWnLmDWlfcf7E',
  authDomain: 'smoothie-kester.firebaseapp.com',
  databaseURL: 'https://smoothie-kester.firebaseio.com',
  projectId: 'smoothie-kester',
  storageBucket: 'smoothie-kester.appspot.com',
  messagingSenderId: '476138435376',
  appId: '1:476138435376:web:b76d528379e885c9364ef5'
}
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)

export default firebaseApp.firestore()
