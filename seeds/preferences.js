exports.seed = (knex, Promise) => {
	return knex('preferences').del().then(() => {
		return knex('preferences').insert([
			{ id: 1, version: '0.1.0', theme: 'default' }
		])
	})
}
