install:
	npm ci

install-eslint-packages:
	npm install eslint
	npm install eslint-config-airbnb-base
	npm install eslint-plugin-import

lint:
	npx eslint ./bin/

publish:
	npm publish --dry-run

brain-games:
	node ./bin/brain-games.js

brain-even:
	node ./bin/brain-even.js

brain-gcd:
	node ./bin/brain-gcd.js

brain-progression:
	node ./bin/brain-progression.js

brain-calc:
	node ./bin/brain-calc.js

brain-prime:
	node ./bin/brain-prime.js

