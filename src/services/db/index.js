import knex from 'knex'
import config from '../../../knexfile'

// Initialize database
const db = knex(config.development)

export default db
