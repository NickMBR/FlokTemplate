<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>
import Preferences from '@/services/api/preferences.js'

export default {
	mounted() {
		Preferences.getSystemLanguage().then(result => {
			this.$i18n.locale = result
		}).catch(error => {
			console.log('ERROR', error)
		})
	}
}
</script>


<style>
::-webkit-scrollbar {
	display: none;
}
.app-bg {
	/*background: url('your_app_background.jpg') no-repeat;*/
	background-size: cover;
	padding: 20px;
}
</style>
