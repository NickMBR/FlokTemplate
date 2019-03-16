exports.up = async (knex, Promise) => {
	const hasTable = await knex.schema.hasTable('preferences')

	if (!hasTable) {
		return knex.schema.createTable('preferences', (table) => {
			table.increments('id').primary()
			table.string('version')
			table.string('theme')
		})
	}
}

exports.down = async (knex, Promise) => {
	return knex.schema.dropTable('preferences')
}
