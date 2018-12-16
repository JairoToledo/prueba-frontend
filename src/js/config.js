import firebase from 'firebase/app'

const config = {
    apiKey: "AIzaSyDIciJreP1uDqVkDmX1ArlP-bgBDK7hjaU",
    authDomain: "pruebas-87011.firebaseapp.com",
    databaseURL: "https://pruebas-87011.firebaseio.com",
    projectId: "pruebas-87011",
    storageBucket: "pruebas-87011.appspot.com",
    messagingSenderId: "387046490097"
  }

  const init = () => firebase.initializeApp(config)

  init()