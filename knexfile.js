module.exports = {
	development: {
		client: 'sqlite3',
		useNullAsDefault: true,
		connection: {
			filename: './database.db'
		},
		debug: true,
		asyncStackTraces: true,
		acquireConnectionTimeout: 10000
	},
	test: {
		client: 'sqlite3',
		useNullAsDefault: true,
		connection: {
			filename: ':memory:'
		},
		seeds: {
			directory: './tests/seeds'
		}
	}
}
