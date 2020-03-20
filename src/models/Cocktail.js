class Cocktail {

    id;
    name;
    totalIngredients;
    loved;
    img;
    glass;
    alcoholic;
    instructions;
    ingredients;
    sheet = false;

    convert(element) {
        let cocktail = new Cocktail();
        cocktail.id = element.idDrink;
        cocktail.name = element.strDrink;
        cocktail.img = element.strDrinkThumb;
        cocktail.glass = element.strGlass;
        cocktail.alcoholic = element.strAlcoholic;
        cocktail.instructions = element.strInstructions;
        cocktail.ingredients = [];

        let totalIgredients = 0;

        for (let ingredients = 1; ingredients <= 15; ingredients++) {
            let ingredient = element["strIngredient" + ingredients];
            let mensure = element["strMeasure" + ingredients];
            let ingredientAux = "";

            if (mensure != null) {
                ingredientAux = mensure.trim() + " ";
            }

            if (ingredient != null) {
                ingredientAux += ingredient;
            }

            if (ingredientAux != "") {
                cocktail.ingredients.push(ingredientAux);
            }
        }

        cocktail.totalIngredients = cocktail.ingredients.length;

        return cocktail;
    }
}

export default Cocktail;