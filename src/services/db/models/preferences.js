import { Model } from 'objection'

class Preferences extends Model {
	static get tableName() {
		return 'preferences'
	}

	static get jsonSchema() {
		return {
			type: 'object',
			properties: {
				id: { type: 'integer' },
				version: { type: 'string' },
				theme: { type: 'string' }
			}
		}
	}
}

export default Preferences
