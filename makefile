install: 
	npm ci


install-eslint-packages: 
	npm install eslint
	npm install eslint-config-airbnb-base
	npm install eslint-plugin-import

lint:
	npx eslint

brain-games: 
	node ./bin/brain-games.js

publish:
	npm publish --dry-runbr

