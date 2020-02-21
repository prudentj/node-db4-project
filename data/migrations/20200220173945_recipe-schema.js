exports.up = function(knex) {
	return knex.schema

		.createTable('recipes', tbl => {
			tbl.increments();
			tbl
				.text('recipe_name', 128)
				.unique()
				.notNullable();
		})

		.createTable('steps', tbl => {
			tbl.increments();
			tbl
				.integer('step_number')
				.unsigned()
				.notNullable();
			tbl.text('instructions').notNullable();
			tbl
				.integer('recipe_id')
				.unsigned()
				.notNullable()
				.references('recipes.id');
		})

		.createTable('ingredients', tbl => {
			tbl.increments();
			tbl
				.text('ingredient_name', 128)
				.unsigned()
				.notNullable();
		})

		.createTable('recipe_ingredients', tbl => {
			tbl
				.integer('recipe_id')
				.unsigned()
				.notNullable()
				.references('recipes.id');
			tbl
				.integer('ingredient_id')
				.unsigned()
				.notNullable()
				.references('ingredients.id');
			tbl
				.float('quantity')
				.unsigned()
				.notNullable();
		});
};

exports.down = function(knex) {
	return knex.schema
		.dropTableIfExists('recipe_ingredients')
		.dropTableIfExists('ingredients')
		.dropTableIfExists('steps')
		.dropTableIfExists('recipes');
};
