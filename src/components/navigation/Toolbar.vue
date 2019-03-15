<template>
	<v-toolbar app fixed dense class="elevation-1">
		<!-- Use this button/icon to drag the window -->
		<v-btn icon style="-webkit-user-select: none; -webkit-app-region: drag">
			<v-icon>mdi-drag-variant</v-icon>
		</v-btn>
		<v-toolbar-title>Template</v-toolbar-title>

		<v-spacer></v-spacer>

		<v-toolbar-items>
			<template v-for="menu in menus">
				<v-menu v-if="menu.nested" :key="menu.title" offset-y :close-on-content-click="true" :nudge-width="150">
					<v-btn :icon="menu.icon != null" flat slot="activator">
						<span v-if="menu.icon == null" class="caption"><b>{{ menu.title }}</b></span>
						<v-icon v-else>{{ menu.icon }}</v-icon>
					</v-btn>
					<v-card flat class="elevation-0">
						<v-list dense class="pa-0">
							<template v-for="item in menu.items">
								<v-divider v-if="item.separator" :key="item.title + '-'"></v-divider>

								<v-list-tile :key="item.title" @click="item.action">
									<v-list-tile-action>
										<v-icon size="24">{{ item.icon }}</v-icon>
									</v-list-tile-action>
									<v-list-tile-title>{{ item.title }}</v-list-tile-title>
								</v-list-tile>
							</template>
						</v-list>
					</v-card>
				</v-menu>
			</template>
		</v-toolbar-items>
	</v-toolbar>
</template>

<script>
// DEPENDENCIES
const { ipcRenderer } = require('electron')

export default {
	name: 'app-toolbar',
	data() {
		return {
			menus: [
				{
					title: 'Menu',
					nested: true,
					icon: 'mdi-settings',
					items: [
						{
							title: 'Home',
							icon: 'mdi-home',
							action: () => {
								this.$router.push('/home')
							}
						},
						{
							title: 'About',
							icon: 'mdi-information-variant',
							separator: true,
							action: () => {
								this.$router.push('/about')
							}
						},
						{
							title: 'Exit',
							icon: 'mdi-power',
							action: () => {
								this.terminate()
							}
						}
					]
				}
			]
		}
	},
	methods: {
		terminate() {
			ipcRenderer.send('exitall')
		}
	}
}
</script>
