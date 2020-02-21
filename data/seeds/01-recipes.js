exports.seed = function(knex) {
	return knex('recipes').insert([
		{recipe_name: 'eggs'},
		{recipe_name: 'PBandJ'}
	]);
};
