exports.seed = function(knex) {
	return knex('steps').insert([
		{
			recipe_id: 1,
			step_number: 1,
			instructions: 'Break the egg'
		},
		{
			recipe_id: 1,
			step_number: 2,
			instructions: 'Cook the egg'
		},
		{
			recipe_id: 2,
			step_number: 2,
			instructions: 'Put two bread pieces of bread together'
		},
		{
			recipe_id: 2,
			step_number: 1,
			instructions: 'Coat bread with Peanut butter and Jelly'
		}
	]);
};
