import Preferences from '../db/models/preferences'

function getSystemPreferences() {
	return new Promise((resolve, reject) => {
		Preferences.query().findById(1).then(result => {
			if (result) {
				resolve(result)
			}
			else {
				throw new Error('NO_DATA')
			}
		}).catch(error => {
			reject(error)
		})
	})
}

function updateSystemVersion(value) {
	return new Promise((resolve, reject) => {
		Preferences.query().patch({ version: value }).where('id', '=', 1).then(() => {
			resolve()
		}).catch(error => {
			reject(error)
		})
	})
}

export default {
	getSystemPreferences,
	updateSystemVersion
}
