import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getDatabase, set, ref, update,child,get } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";
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
    var mail=sessionStorage.getItem('email');
    // var mobile="1234567890";

    const dbRef = ref(getDatabase());
    get(child(dbRef, `users/`)).then((snapshot) => {
    if (snapshot.exists()) {
        console.log(snapshot.val());
        snapshot.forEach((childSnapshot) => {
            console.log(childSnapshot.val());
            var data = childSnapshot.val();
            console.log(data);
            var name=data.username;
            console.log(name);
            var email=data.email;
            var mobile=data.number;
            console.log(mobile);
            if(email==mail){
                document.getElementById("username").innerHTML="Hello, "+name;
                sessionStorage.setItem('mobile',mobile);
            }
        });
        const data=snapshot.val();
        // const user_data=data.filter((user=>user.email=="nikhil@gmail.com"));
        console.log(data);
    } else {
        console.log("No data available");
    }
    }).catch((error) => {
    console.error(error);
    });
    sessionStorage.setItem('mobile',mobile);
    console.log(mobile);

    // var items_db=[];
    // get(child(dbRef, `items/`)).then((snapshot) => {
    //     if (snapshot.exists()) {
    //         console.log(snapshot.val());
    //         var item_data = snapshot.val();
    //         snapshot.forEach((childSnapshot) => {
    //             var x=childSnapshot.val();
    //             console.log(x);
    //             console.log(x.id);
    //             items_db.push({id: x.id, name: x.name, price: x.price, img: x.img,category: x.category,quantity: x.quantity});
    //         });
    //         console.log(items_db);
    //         sessionStorage.setItem('items_data',JSON.stringify(items_db));
            
    //         // sessionStorage.setItem('item_data', JSON.stringify(item_data));
    //     } else {
    //         console.log("No data available");
    //     }
    //     }).catch((error) => {
    //     console.error(error);
    //     });

    // console.log(items_db);

// export {items_db};