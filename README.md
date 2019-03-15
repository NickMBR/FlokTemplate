# Flok Template

Flok template is a boilerplate for a quick start using Electron, Vue, Vuex, Vuetify, SQLite3 with Knex and Objection and tests using Jest

Getting Started
-------------

Follow the steps below:

	git clone https://github.com/NickMBR/FlokTemplate.git
    cd FlockTemplate
    npm install

Build SQLite
-------------

After you install the dependencies, sqlite must be compiled to the target's platform, using [electron-rebuild](https://github.com/electron/electron-rebuild)

Run this command to rebuild sqlite (configured via package.json)

	npm run rebuild

Initialize the database
-------------

You need to use the migration and seed commands to start using the database, see the [Knex Docs](https://knexjs.org/) for more information

	npm run knex migrate:latest
	npm run knex seed:run

Running the app
-------------
	
This template uses [vue-plugin-electron-builder](https://github.com/nklayman/vue-cli-plugin-electron-builder)

	npm run electron:serve

Checkout the package.json for a full list of scripts

Contribute
-------------

Feel free to send pull requests if you want to help me improve this code!