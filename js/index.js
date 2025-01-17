// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((mush) => {
    if (state.mushrooms) {
      mush.style.visibility = 'visible';
    }else{
      mush.style.visibility = 'hidden';
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((grPep) => {
    if (state.greenPeppers) {
      grPep.style.visibility = 'visible';
    }else{
      grPep.style.visibility = 'hidden';
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
    const wSauce = document.querySelector('.sauce');

    if (state.whiteSauce) {
      wSauce.style.visibility = 'visible'
    }else{
      wSauce.style.visibility = 'hidden'
    }

    
  }




function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  

  if (state.glutenFreeCrust) {
    isCrust = document.querySelector(".crust")
    isCrust.classList.add("crust-gluten-free")
    
  }else{
    isCrust = document.querySelector(".crust")
    isCrust.classList.remove("crust-gluten-free")
  }

    
  }


function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  if (state.pepperoni) {
    pepBtn = document.querySelector(".btn-pepperoni")
    pepBtn.classList.add("active")
    
  }else{
    pepBtn = document.querySelector(".btn-pepperoni").classList.remove("active")
  }

  if (state.mushrooms) {
    mshBtn = document.querySelector(".btn-mushrooms")
    mshBtn.classList.add("active") 
  }else{
    mshBtn = document.querySelector(".btn-mushrooms")
    mshBtn.classList.remove("active") 
  }

  if (state.greenPeppers) {
    grnBtn = document.querySelector(".btn-green-peppers")
    grnBtn.classList.add("active") 
  }else{
    grnBtn = document.querySelector(".btn-green-peppers")
    grnBtn.classList.remove("active") 
  }
  if (state.whiteSauce) {
    wtsBtn = document.querySelector(".btn-sauce")
    wtsBtn.classList.add("active") 
  }else{
    wtsBtn = document.querySelector(".btn-sauce")
    wtsBtn.classList.remove("active") 
  }
  if (state.glutenFreeCrust) {
    crsBtn = document.querySelector(".btn-crust")
    crsBtn.classList.add("active") 
  }else{
    crsBtn = document.querySelector(".btn-crust")
    crsBtn.classList.remove("active") 
  }
}
  
  
  
  
  


function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let sum = basePrice;
  const ingredientsList = document.querySelector('.panel.price ul');
  const price = document.querySelector('.panel.price strong');
  ingredientsList.innerHTML = '';
  if (state.pepperoni) {
    ingredientsList.innerHTML += `<li>$${ingredients.pepperoni.price} ${ingredients.pepperoni.name}</li>`;
    sum += ingredients.pepperoni.price;
  }

  if (state.mushrooms) {
    ingredientsList.innerHTML += `<li>$${ingredients.mushrooms.price} ${ingredients.mushrooms.name}</li>`;
    sum += ingredients.mushrooms.price;
  }

  if (state.greenPeppers) {
    ingredientsList.innerHTML += `<li>$${ingredients.greenPeppers.price} ${ingredients.greenPeppers.name}</li>`;
    sum += ingredients.greenPeppers.price;
  }

  if (state.whiteSauce) {
    ingredientsList.innerHTML += `<li>$${ingredients.whiteSauce.price} ${ingredients.whiteSauce.name}</li>`;
    sum += ingredients.whiteSauce.price;
  }

  if (state.glutenFreeCrust) {
    ingredientsList.innerHTML += `<li>$${ingredients.glutenFreeCrust.price} ${ingredients.glutenFreeCrust.name}</li>`;
    sum += ingredients.glutenFreeCrust.price;
  }
  price.innerHTML = `$${sum}`;
  }



renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click',function (){
  state.mushrooms = !state.mushrooms;
  renderEverything();
})
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click',function (){
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
})
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click',function (){
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
})
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click',function (){
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
})