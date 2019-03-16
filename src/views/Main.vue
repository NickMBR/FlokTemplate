<template>
	<v-app>
		<app-toolbar></app-toolbar>

		<v-content>
			<v-container fluid fill-height>
				<router-view />
			</v-container>
		</v-content>
	</v-app>
</template>

<script>
import Toolbar from '@/components/navigation/Toolbar'

export default {
	name: 'home',
	components: {
		'app-toolbar': Toolbar
	}
}
</script>
