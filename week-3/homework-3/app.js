// --------importing DATA---------
import menu from "./data.js";

// ----Categories Array----
const allCategories = ["All", ...new Set(menu.map((item) => item.category))];

const categoryList = document.querySelector(".btn-container");
const menuContainer = document.querySelector(".section-center");


// function to create buttons
const createButton = (className, category, type) => {
  let button = document.createElement("button");
  button.className = className;
  button.innerText = category;
  button.type = type;
  button.onclick = () => {
    menuList(category);
  };
  return button;
};


// appending buttons to DOM
allCategories.map((category) => {
  let catButton = createButton("btn-item", category, "button");
  categoryList.appendChild(catButton);
});



// function to create single menuItems
//In this function I decided to create the menuItem as an HTML code
// and append it using the "innerHTML" attribute, for improved readability in code
const createMenuItem = (foodItem) => {
  const menuItem = `   
   <div class="menu-items col-lg-6 col-sm-12">
   <img class="photo" src="${foodItem.img}" alt="${foodItem.title}">
   <div class="menu-info">
     <div class="menu-title">
       <h4>${foodItem.title}</h4>
       <h4>${foodItem.price}</h4>
     </div>
     <div class="menu-text">${foodItem.desc}</div>
   </div>
 </div>  
 `;

  return menuItem;
};


// function to create the Menu Items List from single menu items depending on the filter
const filterCat = "All";
const menuList = (filterCategory) => {
  let menuList = "";
  let filteredItems = menu;
  if (filterCategory != "All") {
    filteredItems = menu.filter((item) => item.category == filterCategory);
    console.log(filteredItems);
  }

  filteredItems.map((item) => {
    menuList += createMenuItem(item);
  });

  menuContainer.innerHTML = menuList;
};


// this function is called when the page is loaded and when the buttons are clicked
menuList(filterCat);

