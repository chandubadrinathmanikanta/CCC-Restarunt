import { addItem2db } from "./add_to_db.js";
import { foodItem } from "./fooditem.js";

//Getting data from firebase

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import {
  getDatabase,
  set,
  ref,
  update,
  child,
  get,
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";
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
  appId: "1:75734744670:web:4217d6054687bc7fb3fecf",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();
const dbRef = ref(getDatabase());

var items_db = [];
let new_items_db;
get(child(dbRef, `items/`))
  .then((snapshot) => {
    if (snapshot.exists()) {
      // console.log(snapshot.val());
      var item_data = snapshot.val();
      snapshot.forEach((childSnapshot) => {
        var x = childSnapshot.val();
        console.log(x.name);
        //convert string to int
        x.quantity = parseInt(x.quantity);
        x.price = parseInt(x.price);
        items_db = [
          ...items_db,
          {
            id: x.id,
            name: x.name,
            price: x.price,
            img: x.img,
            category: x.category,
            quantity: x.quantity,
          },
        ];
      });
      console.log(items_db);
      new_items_db = items_db;

      sessionStorage.setItem("items_data", JSON.stringify(items_db));

      function displayItems() {
        var biryani = document.getElementById("biryani");
        var paneer = document.getElementById("paneer");
        var chicken = document.getElementById("chicken");
        var vegetable = document.getElementById("vegetable");
        var chinese = document.getElementById("chinese");
        var southIndian = document.getElementById("south-indian");

        var biryaniData = items_db.filter((item) => item.category == "biryani");
        const chickenData = items_db.filter(
          (item) => item.category == "chicken"
        );
        const PaneerData = items_db.filter((item) => item.category == "paneer");
        const vegetableData = items_db.filter(
          (item) => item.category == "vegetable"
        );
        const chineseData = items_db.filter(
          (item) => item.category == "chinese"
        );
        const southData = items_db.filter(
          (item) => item.category == "southIndian"
        );
        biryaniData.map((item) => {
          var itemCard = document.createElement("div");
          itemCard.setAttribute("id", "item-card");

          var cardTop = document.createElement("div");
          cardTop.setAttribute("id", "card-top");

          var cart = document.createElement("i");
          cart.setAttribute("class", "fa fa-shopping-cart add-to-cart");
          cart.setAttribute("id", item.id);

          var edit = document.createElement("i");
          edit.setAttribute("class", "uil uil-pen");

          cardTop.appendChild(cart);
          cardTop.appendChild(edit);

          var del_item = document.createElement("i");
          del_item.setAttribute("class", "uil uil-trash-alt");
          del_item.setAttribute("id", "del_item_id");
          // del_item.setAttribute('id',item.id)
          cardTop.appendChild(del_item);

          var img = document.createElement("img");
          img.src = item.img;

          var itemName = document.createElement("p");
          itemName.setAttribute("id", "item-name");
          itemName.innerText = item.name;

          var itemPrice = document.createElement("p");
          itemPrice.setAttribute("id", "item-price");
          itemPrice.innerText = "Price : ₹ " + item.price;

          itemCard.appendChild(cardTop);
          itemCard.appendChild(img);
          itemCard.appendChild(itemName);
          itemCard.appendChild(itemPrice);

          biryani.appendChild(itemCard);
        });

        chickenData.map((item) => {
          var itemCard = document.createElement("div");
          itemCard.setAttribute("id", "item-card");

          var cardTop = document.createElement("div");
          cardTop.setAttribute("id", "card-top");

          var cart = document.createElement("i");
          cart.setAttribute("class", "fa fa-shopping-cart add-to-cart");
          cart.setAttribute("id", item.id);

          cardTop.appendChild(cart);

          var img = document.createElement("img");
          img.src = item.img;

          var itemName = document.createElement("p");
          itemName.setAttribute("id", "item-name");
          itemName.innerText = item.name;

          var itemPrice = document.createElement("p");
          itemPrice.setAttribute("id", "item-price");
          itemPrice.innerText = "Price : ₹ " + item.price;

          itemCard.appendChild(cardTop);
          itemCard.appendChild(img);
          itemCard.appendChild(itemName);
          itemCard.appendChild(itemPrice);

          chicken.appendChild(itemCard);
        });

        PaneerData.map((item) => {
          var itemCard = document.createElement("div");
          itemCard.setAttribute("id", "item-card");

          var cardTop = document.createElement("div");
          cardTop.setAttribute("id", "card-top");

          var cart = document.createElement("i");
          cart.setAttribute("class", "fa fa-shopping-cart add-to-cart");
          cart.setAttribute("id", item.id);

          cardTop.appendChild(cart);

          var img = document.createElement("img");
          img.src = item.img;

          var itemName = document.createElement("p");
          itemName.setAttribute("id", "item-name");
          itemName.innerText = item.name;

          var itemPrice = document.createElement("p");
          itemPrice.setAttribute("id", "item-price");
          itemPrice.innerText = "Price : ₹ " + item.price;

          itemCard.appendChild(cardTop);
          itemCard.appendChild(img);
          itemCard.appendChild(itemName);
          itemCard.appendChild(itemPrice);

          paneer.appendChild(itemCard);
        });

        vegetableData.map((item) => {
          var itemCard = document.createElement("div");
          itemCard.setAttribute("id", "item-card");

          var cardTop = document.createElement("div");
          cardTop.setAttribute("id", "card-top");

          var cart = document.createElement("i");
          cart.setAttribute("class", "fa fa-shopping-cart add-to-cart");
          cart.setAttribute("id", item.id);

          cardTop.appendChild(cart);

          var img = document.createElement("img");
          img.src = item.img;

          var itemName = document.createElement("p");
          itemName.setAttribute("id", "item-name");
          itemName.innerText = item.name;

          var itemPrice = document.createElement("p");
          itemPrice.setAttribute("id", "item-price");
          itemPrice.innerText = "Price : ₹ " + item.price;

          itemCard.appendChild(cardTop);
          itemCard.appendChild(img);
          itemCard.appendChild(itemName);
          itemCard.appendChild(itemPrice);

          vegetable.appendChild(itemCard);
        });

        chineseData.map((item) => {
          var itemCard = document.createElement("div");
          itemCard.setAttribute("id", "item-card");

          var cardTop = document.createElement("div");
          cardTop.setAttribute("id", "card-top");

          var cart = document.createElement("i");
          cart.setAttribute("class", "fa fa-shopping-cart add-to-cart");
          cart.setAttribute("id", item.id);

          cardTop.appendChild(cart);

          var img = document.createElement("img");
          img.src = item.img;

          var itemName = document.createElement("p");
          itemName.setAttribute("id", "item-name");
          itemName.innerText = item.name;

          var itemPrice = document.createElement("p");
          itemPrice.setAttribute("id", "item-price");
          itemPrice.innerText = "Price : ₹ " + item.price;

          itemCard.appendChild(cardTop);
          itemCard.appendChild(img);
          itemCard.appendChild(itemName);
          itemCard.appendChild(itemPrice);

          chinese.appendChild(itemCard);
        });

        southData.map((item) => {
          var itemCard = document.createElement("div");
          itemCard.setAttribute("id", "item-card");

          var cardTop = document.createElement("div");
          cardTop.setAttribute("id", "card-top");

          var cart = document.createElement("i");
          cart.setAttribute("class", "fa fa-shopping-cart add-to-cart");
          cart.setAttribute("id", item.id);

          cardTop.appendChild(cart);

          var img = document.createElement("img");
          img.src = item.img;

          var itemName = document.createElement("p");
          itemName.setAttribute("id", "item-name");
          itemName.innerText = item.name;

          var itemPrice = document.createElement("p");
          itemPrice.setAttribute("id", "item-price");
          itemPrice.innerText = "Price : ₹ " + item.price;

          itemCard.appendChild(cardTop);
          itemCard.appendChild(img);
          itemCard.appendChild(itemName);
          itemCard.appendChild(itemPrice);

          southIndian.appendChild(itemCard);
        });
      }
      displayItems();

      const vegData = [
        ...new Map(foodItem.map((item) => [item["category"], item])).values(),
      ];
      console.log(vegData);

      function selectTaste() {
        var categoryList = document.getElementById("category-list");

        vegData.map((item) => {
          console.log(item);
          var listCard = document.createElement("div");
          listCard.setAttribute("class", "list-card");

          var listImg = document.createElement("img");
          listImg.src = item.img;

          var listName = document.createElement("a");
          listName.setAttribute("class", "list-name");
          listName.innerText = item.category;
          listName.setAttribute("href", "#" + item.category);

          listCard.appendChild(listImg);
          listCard.appendChild(listName);

          var cloneListCard = listCard.cloneNode(true);
          categoryList.appendChild(listCard);
          document.querySelector(".category-header").appendChild(cloneListCard);
        });
      }
      selectTaste();

      // document.querySelectorAll('.add-to-cart').forEach(item=>{

      //     item.addEventListener('click',addToCart)

      // })
      var add_btn = document.querySelector(".add-item");
      add_btn.addEventListener("click", addItem);
      var tog_flag = 0;

      //Global declarations

      var food_menu = document.getElementById("food-items");
      add_btn.classList.add("add-item-clicked");

      var add_card = document.createElement("div");
      add_card.setAttribute("class", "add-card");
      add_card.setAttribute("id", "add-card");

      var add_item_box = document.createElement("div");
      add_item_box.setAttribute("class", "add-item-box");

      var headings = document.createElement("h3");
      headings.innerText = "Add your items here";

      var add_item_form = document.createElement("form");
      add_item_form.setAttribute("id", "add-item-form");

      var item_id = document.createElement("input");
      item_id.setAttribute("type", "number");
      item_id.setAttribute("id", "item-id");
      item_id.setAttribute("placeholder", "Item ID");
      item_id.setAttribute("required", "true");
      item_id.required = true;

      var item_name = document.createElement("input");
      item_name.setAttribute("type", "text");
      item_name.setAttribute("placeholder", "Item Name");
      item_name.setAttribute("id", "item-name");
      item_name.setAttribute("required", "true");

      var item_price = document.createElement("input");
      item_price.setAttribute("type", "number");
      item_price.setAttribute("placeholder", "Item Price");
      item_price.setAttribute("id", "item-price");
      item_price.setAttribute("required", "true");

      var item_img = document.createElement("input");
      item_img.setAttribute("type", "text");
      item_img.setAttribute("placeholder", "Item Link");
      item_img.setAttribute("id", "item-img");
      item_img.setAttribute("required", "true");

      var item_category = document.createElement("select");
      item_category.setAttribute("id", "item-category");

      var biryani = document.createElement("option");
      biryani.setAttribute("value", "biryani");
      biryani.innerText = "Biryani";

      var chicken = document.createElement("option");
      chicken.setAttribute("value", "chicken");
      chicken.innerText = "Chicken";

      var paneer = document.createElement("option");
      paneer.setAttribute("value", "paneer");
      paneer.innerText = "Paneer";

      var vegetable = document.createElement("option");
      vegetable.setAttribute("value", "vegetable");
      vegetable.innerText = "Vegetable";

      var chinese = document.createElement("option");
      chinese.setAttribute("value", "chinese");
      chinese.innerText = "Chinese";

      var southIndian = document.createElement("option");
      southIndian.setAttribute("value", "southIndian");
      southIndian.innerText = "South Indian";

      item_category.appendChild(biryani);
      item_category.appendChild(chicken);
      item_category.appendChild(paneer);
      item_category.appendChild(vegetable);
      item_category.appendChild(chinese);
      item_category.appendChild(southIndian);

      var add_item_btn = document.createElement("p");
      add_item_btn.setAttribute("id", "add-item-btn");
      add_item_btn.setAttribute("name", "add_item_btn");
      add_item_btn.innerText = "Proceed Item";

      add_item_form.appendChild(item_id);
      add_item_form.appendChild(item_name);
      add_item_form.appendChild(item_price);
      add_item_form.appendChild(item_img);
      add_item_form.appendChild(item_category);
      add_item_form.appendChild(add_item_btn);

      add_item_box.appendChild(headings);
      add_item_box.appendChild(add_item_form);

      add_card.appendChild(add_item_box);

      var parent = food_menu.parentNode;

      function addItem() {
        console.log("Added item");
        if (tog_flag == 0) {
          tog_flag = 1;

          parent.replaceChild(add_card, food_menu);

          // add_item_btn.addEventListener('click',addItemToDB);
        } else {
          tog_flag = 0;
          parent.replaceChild(food_menu, add_card);
        }
      }

      add_item_btn.addEventListener("click", addItem2db);

      document.querySelectorAll(".uil-trash-alt").forEach((item) => {
        item.addEventListener("click", deleteItem);
      });
      function deleteItem() {
        console.log("deleting item");
        var itemToDel = this.parentNode;
        var card = itemToDel.parentNode;
        console.log(card);
        // var itemObj= foodItem.find(element=>element.name==itemToDel);
        card.style.display = "none";
        // console.log(foodItem);
        // foodItem.splice(itemObj);
      }

      // var clicking= document.getElementsByClassName('fa-shopping-cart');
      // for(var i=0;i<clicking.length;i++){
      //     clicking[i].addEventListener('click',addToCart)
      // }

      function editItem() {
        var new_item = prompt("Enter the name", "");
        var item_name = this.parentNode.nextSibling.nextSibling;
        item_name.innerText = new_item;
      }

      var cartData = [];
      function addToCart() {
        console.log("Clicked");

        var itemToAdd = this.parentNode.nextSibling.nextSibling.innerText;
        var itemObj = foodItem.find((element) => element.name == itemToAdd);

        var index = cartData.indexOf(itemObj);
        if (index === -1) {
          document.getElementById(itemObj.id).classList.add("toggle-cart");
          cartData = [...cartData, itemObj];
        } else if (index > -1) {
          alert("Added to cart!");
        }

        document.getElementById("cart-plus").innerText =
          " " + cartData.length + " Items";
        document.getElementById("m-cart-plus").innerText =
          " " + cartData.length;
        totalAmount();
        cartItems();
      }

      function cartItems() {
        var tableBody = document.getElementById("table-body");
        tableBody.innerHTML = "";

        cartData.map((item) => {
          var tableRow = document.createElement("tr");

          var rowData1 = document.createElement("td");
          var img = document.createElement("img");
          img.src = item.img;
          rowData1.appendChild(img);

          var rowData2 = document.createElement("td");
          rowData2.innerText = item.name;

          var rowData3 = document.createElement("td");
          var btn1 = document.createElement("button");
          btn1.setAttribute("class", "decrease-item");
          btn1.innerText = "-";
          var span = document.createElement("span");
          span.innerText = item.quantity;
          var btn2 = document.createElement("button");
          btn2.setAttribute("class", "increase-item");
          btn2.innerText = "+";

          rowData3.appendChild(btn1);
          rowData3.appendChild(span);
          rowData3.appendChild(btn2);

          var rowData4 = document.createElement("td");
          rowData4.innerText = item.price;

          tableRow.appendChild(rowData1);
          tableRow.appendChild(rowData2);
          tableRow.appendChild(rowData3);
          tableRow.appendChild(rowData4);

          tableBody.appendChild(tableRow);
        });
        document.querySelectorAll(".increase-item").forEach((item) => {
          item.addEventListener("click", incrementItem);
        });

        document.querySelectorAll(".decrease-item").forEach((item) => {
          item.addEventListener("click", decrementItem);
        });
      }

      function incrementItem() {
        let itemToInc = this.parentNode.previousSibling.innerText;
        console.log(itemToInc);
        var incObj = cartData.find((element) => element.name == itemToInc);
        incObj.quantity += 1;

        currPrice =
          (incObj.price * incObj.quantity -
            incObj.price * (incObj.quantity - 1)) /
          (incObj.quantity - 1);
        incObj.price = currPrice * incObj.quantity;
        totalAmount();
        cartItems();
      }

      var currPrice = 0;
      function decrementItem() {
        let itemToInc = this.parentNode.previousSibling.innerText;
        let decObj = cartData.find((element) => element.name == itemToInc);
        let ind = cartData.indexOf(decObj);
        if (decObj.quantity > 1) {
          currPrice =
            (decObj.price * decObj.quantity -
              decObj.price * (decObj.quantity - 1)) /
            decObj.quantity;
          decObj.quantity -= 1;
          decObj.price = currPrice * decObj.quantity;
        } else {
          document.getElementById(decObj.id).classList.remove("toggle-cart");
          cartData.splice(ind, 1);
          document.getElementById("cart-plus").innerText =
            " " + cartData.length + " Items";
          document.getElementById("m-cart-plus").innerText =
            " " + cartData.length;
          if (cartData.length < 1 && flag) {
            document
              .getElementById("food-items")
              .classList.toggle("food-items");
            document
              .getElementById("category-list")
              .classList.toggle("food-items");
            document
              .getElementById("m-cart-plus")
              .classList.toggle("m-cart-toggle");
            document
              .getElementById("cart-page")
              .classList.toggle("cart-toggle");
            document
              .getElementById("category-header")
              .classList.toggle("toggle-category");
            document.getElementById("checkout").classList.toggle("cart-toggle");
            flag = false;
            alert("Currently no item in cart!");
            console.log(flag);
          }
        }
        totalAmount();
        cartItems();
      }

      function totalAmount() {
        var sum = 0;
        cartData.map((item) => {
          sum += item.price;
        });
        document.getElementById("total-item").innerText =
          "Total Item : " + cartData.length;
        document.getElementById("total-price").innerText =
          "Total Price : ₹ " + sum;
        document.getElementById("m-total-amount").innerText =
          "Total Price : ₹ " + sum;
      }

      document
        .getElementById("cart-plus")
        .addEventListener("click", cartToggle);
      document
        .getElementById("m-cart-plus")
        .addEventListener("click", cartToggle);
      document
        .getElementById("side-menu-orders")
        .addEventListener("click", cartToggle);
      document
        .getElementById("side-menu-cart")
        .addEventListener("click", cartToggle);
      document
        .getElementById("side-menu-checkout")
        .addEventListener("click", cartToggle);

      var flag = false;
      function cartToggle() {
        if (cartData.length > 0) {
          document.getElementById("food-items").classList.toggle("food-items");
          document
            .getElementById("category-list")
            .classList.toggle("food-items");
          document
            .getElementById("category-header")
            .classList.toggle("toggle-category");
          document
            .getElementById("m-cart-plus")
            .classList.toggle("m-cart-toggle");
          document.getElementById("cart-page").classList.toggle("cart-toggle");
          document.getElementById("checkout").classList.toggle("cart-toggle");
          flag = true;
          console.log(flag);
        } else {
          alert("Currently no item in cart!");
        }
      }

      window.onresize = window.onload = function () {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
        } else {
          x.innerHTML = "Geolocation is not supported by this browser.";
        }

        function showPosition(position) {
          x.innerHTML =
            "Latitude: " +
            position.coords.latitude +
            "<br>Longitude: " +
            position.coords.longitude;
        }

        var size = window.screen.width;
        console.log(size);
        if (size < 800) {
          var cloneFoodItems = document
            .getElementById("food-items")
            .cloneNode(true);
          var cloneCartPage = document
            .getElementById("cart-page")
            .cloneNode(true);
          document.getElementById("food-items").remove();
          document.getElementById("cart-page").remove();
          document.getElementById("category-header").after(cloneFoodItems);
          document.getElementById("food-items").after(cloneCartPage);
          addEvents();
        }
        if (size > 800) {
          var cloneFoodItems = document
            .getElementById("food-items")
            .cloneNode(true);
          document.getElementById("food-items").remove();
          document.getElementById("header").after(cloneFoodItems);

          var cloneCartPage = document
            .getElementById("cart-page")
            .cloneNode(true);
          document.getElementById("cart-page").remove();
          document.getElementById("food-items").after(cloneCartPage);
          addEvents();
        }
      };

      function addEvents() {
        document.querySelectorAll(".add-to-cart").forEach((item) => {
          item.addEventListener("click", addToCart);
        });

        document.querySelectorAll(".uil-trash-alt").forEach((item) => {
          item.addEventListener("click", deleteItem);
        });

        document.querySelectorAll(".increase-item").forEach((item) => {
          item.addEventListener("click", incrementItem);
        });

        document.querySelectorAll(".decrease-item").forEach((item) => {
          item.addEventListener("click", decrementItem);
        });
        document.querySelectorAll(".uil-pen").forEach((item) => {
          item.addEventListener("click", editItem);
        });
      }

      document
        .getElementById("add-address")
        .addEventListener("click", addAddress);

      document
        .getElementById("m-add-address")
        .addEventListener("click", addAddress);

      function addAddress() {
        var address = prompt("Enter your address", "");
        if (address) {
          document.getElementById("add-address").innerText = " " + address;
        } else {
          alert("Address not added");
        }
      }
    } else {
      console.log("No data available");
    }
  })
  .catch((error) => {
    console.error(error);
  });
