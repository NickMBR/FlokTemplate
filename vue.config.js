module.exports = {
	pluginOptions: {
		electronBuilder: {
			externals: [
				'sqlite3',
				'knex'
			],
			nodeModulesPath: ['../../node_modules', './node_modules']
		}
	}
}
