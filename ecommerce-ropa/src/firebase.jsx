import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyANEoxD-naltBNSvWx0q4QnVNkx1ATiufo",
    authDomain: "proyecto-tienda-ecommerce.firebaseapp.com",
    projectId: "proyecto-tienda-ecommerce",
    storageBucket: "proyecto-tienda-ecommerce.appspot.com",
    messagingSenderId: "818140355201",
    appId: "1:818140355201:web:9d22013f15e7d53ad94b80"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  export {auth}