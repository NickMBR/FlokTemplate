exports.up = async (knex, Promise) => {
	return knex.schema.table('preferences', (table) => {
		table.string('language')
	})
}

exports.down = async (knex, Promise) => {
	return knex.schema.table('preferences', (table) => {
		table.dropColumn('language')
	})
}
