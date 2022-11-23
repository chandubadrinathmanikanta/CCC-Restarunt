    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
  import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
  
    const firebaseConfig = {
  apiKey: "AIzaSyCOpPG9TgRbP5Z5HPAka01JmOuavbA_35U",
  authDomain: "ccc-auth-3851a.firebaseapp.com",
  databaseURL: "https://ccc-auth-3851a-default-rtdb.firebaseio.com",
  projectId: "ccc-auth-3851a",
  storageBucket: "ccc-auth-3851a.appspot.com",
  messagingSenderId: "75734744670",
  appId: "1:75734744670:web:4217d6054687bc7fb3fecf"
};

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    const auth = getAuth();

var add_btn = document.getElementById('add-item-btn');


function addItem2db(){

    console.log('Data Sent');
    console.log('Helooooo');
    var id = document.getElementById('item-id').value;
    var name = document.getElementById('item-name').value;
    var price = document.getElementById('item-price').value;
    var img=document.getElementById('item-img').value;
    var category = document.getElementById('item-category').value;
    var quantity=1;

    if(id == '' || name == '' || price == '' || img == '' || category == ''){
        alert('Please fill all the fields');
    }
    else{

    console.log(name);
    console.log(price);
    console.log(img);
    console.log(category);

    set(ref(database, 'items/' + name),{
        id: id,
        name: name,
        price: price,
        img: img,
        category: category,
        quantity: quantity
    })
    .then(() => {
        console.log('Data added');
        location.reload();
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    
        alert(errorMessage);
      // ..
      });
}}

export { addItem2db };

