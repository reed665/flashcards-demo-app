import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyA5V2KT9UJr8Ds30J51q-FPrXVt7SdpMPQ",
  authDomain: "flashcards-demo-app.firebaseapp.com",
  databaseURL: "https://flashcards-demo-app.firebaseio.com",
  projectId: "flashcards-demo-app",
  storageBucket: "flashcards-demo-app.appspot.com",
  messagingSenderId: "326652028703",
}

firebase.initializeApp(config)
const firestore = firebase.firestore()
firestore.settings({ timestampsInSnapshots: true })

export default firestore