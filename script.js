const btn = document.querySelector("#getRandomDish");
const dishNameElement = document.querySelector(".dish-name");
const container = document.querySelector('.main-container');
const btnContainer = document.querySelector('.btn-container');

btn.addEventListener( 'click', callFoodAPI);



// Calling API and getting the data

function callFoodAPI() {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then( (response) => { 
        return response.json() 
    })
    .then( (data) => {
        
        showMealToPage(data);
    });
};

// got the data from api now extracting from data

function showMealToPage(data){

    const meal = data.meals[0];

    const mealName = meal.strMeal;
    const mealCategory = meal.strCategory;
    const mealArea = meal.strArea;
    const mealInstructions = meal.strInstructions;
    const mealImage = meal.strMealThumb;
    const mealTags = meal.strTags;
    const mealIngredients = [meal.strIngredient1, meal.strIngredient2, meal.strIngredient3, meal.strIngredient4, meal.strIngredient5, meal.strIngredient6, meal.strIngredient7, meal.strIngredient8, meal.strIngredient9, meal.strIngredient10, meal.strIngredient11, meal.strIngredient12, meal.strIngredient13, meal.strIngredient14, meal.strIngredient15, meal.strIngredient16, meal.strIngredient17, meal.strIngredient18, meal.strIngredient19, meal.strIngredient20]
    const mealMeasure = [meal.strMeasure1, meal.strMeasure2, meal.strMeasure3, meal.strMeasure4, meal.strMeasure5, meal.strMeasure6, meal.strMeasure7, meal.strMeasure8, meal.strMeasure9, meal.strMeasure10, meal.strMeasure11, meal.strMeasure12, meal.strMeasure13, meal.strMeasure14, meal.strMeasure15, meal.strMeasure16, meal.strMeasure17, meal.strMeasure18, meal.strMeasure19, meal.strMeasure20];


    let tableData = ``;

  
    mealIngredients.forEach( (value, index) => {
      if( value){
          tableData += `<tr>
        <td>${value}</td>
        <td>${mealMeasure[index]}</td>
        </tr>`;
      }
    });

    // console.log(tableData);


    // adding html to container
    container.innerHTML = `
    <h1 class="dish-name">${ mealName }</h1>

        <div class="img-container">
            <img  class="dish-image" src=${ mealImage } alt="">
        </div>

        <div class="dish-info">
            <h4 class="dish-area">${ mealArea }</h4>
            <h4 class="dish-type">${ mealCategory }</h4>
        </div>

        <div class="dish-instructions-container">
            <h3>How to Make?</h3>
            <p class="dish-instructions">
                    ${ mealInstructions }
            </p>
        </div>

        <div class="ingredient-container">
          
    <table class="GeneratedTable">
      <thead>
        <tr>
          <th colspan="2">Ingredients</th>
          
        </tr>
      </thead>
      <tbody>
          ${tableData}
      </tbody>
    </table>

    
    
        </div>`

    
    
    btnContainer.classList.add("btn-after-data");  
    btn.textContent = "Another Dish"
    
    document.querySelector('.main-container').scrollIntoView({ 
        behavior: 'smooth' 
      });
}




