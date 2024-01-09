const searchButton = document.getElementById('searchButton');
const searchBar = document.getElementById('searchBar');
const random = document.getElementById('random_meal')
const list = document.getElementById('list_of_searched_meal')

let food = "biryani";

searchButton.onclick = () => {
    console.log(searchBar.value);
    food = searchBar.value;
    searchBar.value = '';
    searchMeal();
  };
function randomiseFood(){
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
    .then((res) => res.json())
    .then((data) =>{
        console.log(data);
        dispalyRandom(data);
        openPopUp(data);
    })
}
function dispalyRandom(input){
    random.innerHTML = `
    <h3>Random Food Items</h3>
    <img class="imageOfRandomFood" id="randomImage" src="${input.meals[0].strMealThumb}" />
    <p>${input.meals[0].strMeal}</p>
    `;
}
randomiseFood();
function searchMeal(){
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${food}`)
    .then((res) => res.json())
    .then((data) =>{
        console.log(data);
        result(data);
    })
}
function result(meal){
    list.innerHTML = `
    <h3>List of searched meal:</h3> 
    <div class="meal-list">
    <div class="meal-item">
    <img class="listOfImages" src="${meal.meals[0].strMealThumb}"/>
    <p>${meal.meals[0].strMeal}</p>
    
    </div>
    <div class="meal-item">
    <img class="listOfImages" src="${meal.meals[1].strMealThumb}"/>
    <p>${meal.meals[1].strMeal}</p>
   
    </div>
    <div class="meal-item">
    <img class="listOfImages" src="${meal.meals[2].strMealThumb}"/>
    <p>${meal.meals[2].strMeal}</p>
    
    </div>
    <div class="meal-item">
    <img class="listOfImages" src="${meal.meals[3].strMealThumb}"/>
    <p>${meal.meals[3].strMeal}</p>
   
    </div>
    <div class="meal-item">
    <img class="listOfImages" src="${meal.meals[4].strMealThumb}"/>
    <p>${meal.meals[4].strMeal}</p>
   
    </div>
    <div class="meal-item">
    <img class="listOfImages" src="${meal.meals[5].strMealThumb}"/>
    <p>${meal.meals[5].strMeal}</p>
    
    </div>
    <div class="meal-item">
    <img class="listOfImages" src="${meal.meals[6].strMealThumb}"/>
    <p>${meal.meals[6].strMeal}</p>
   
    </div>
    <div class="meal-item">
    <img class="listOfImages" src="${meal.meals[7].strMealThumb}"/>
    <p>${meal.meals[7].strMeal}</p>

  
    </div>
      `
}
searchMeal();




