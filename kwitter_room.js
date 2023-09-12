 var firebaseConfig = {
      apiKey: "AIzaSyDAwbs4VBRX519fpErtJ3DzVm4AvZl5hPk",
      authDomain: "kwitter-b7e14.firebaseapp.com",
      databaseURL: "https://kwitter-b7e14-default-rtdb.firebaseio.com",
      projectId: "kwitter-b7e14",
      storageBucket: "kwitter-b7e14.appspot.com",
      messagingSenderId: "841940802605",
      appId: "1:841940802605:web:c03c648ef407c57e6aaca4"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
//AGREGA TUS ENLACES DE FIREBASE AQUÍ

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicia el código

      //Finaliza el código
      });});}
getData();
