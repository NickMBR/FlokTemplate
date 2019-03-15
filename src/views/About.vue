<template>
	<v-layout justify-center align-center>
		<v-flex shrink>
			<h1>About Page</h1>
			<span class="caption">Version: {{ preferences ? preferences.version : '' }}</span>
		</v-flex>
	</v-layout>
</template>

<script>
import Preferences from '@/services/api/preferences.js'

export default {
	data() {
		return {
			preferences: []
		}
	},
	mounted() {
		this.getPreferences()
	},
	methods: {
		getPreferences() {
			Preferences.getSystemPreferences().then(result => {
				this.preferences = result
			}).catch(error => {
				console.log('ERROR', error)
			})
		}
	}
}
</script>
