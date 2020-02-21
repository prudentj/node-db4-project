exports.seed = function(knex) {
	return knex('ingredients').insert([
		{
			ingredient_name: 'Egg'
		},
		{
			ingredient_name: 'Bread'
		},
		{
			ingredient_name: 'Peanut Butter'
		},
		{
			ingredient_name: 'Jelly'
		}
	]);
};
