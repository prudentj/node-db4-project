// `getRecipes()`: should return a list of all recipes in the database.
//`getShoppingList(recipe_id)`: should return a list of all ingredients and quantities for a given recipe
//`getInstructions(recipe_id)`: should return a list of step by step instructions
//for preparing a recipe

const db = require('../data/db-config');

module.exports = {
	getRecipes,
	getShoppingList,
	getInstructions
};

function getRecipes() {
	return db('recipes').select('*');
}

function getShoppingList(recipe_id) {
	return db('recipe_ingredients')
		.join('ingredients', 'ingredients.id', 'recipe_ingredients.ingredient_id')
		.select('*')
		.where('recipe_id', recipe_id);
}

function getInstructions(recipe_id) {
	return db('steps')
		.select('*')
		.where('recipe_id', recipe_id);
}
