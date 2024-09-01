#!/bin/bash

	echo "Deployment started: $(date)"


	echo "Fetching Latest Updates"
	# Pull latest changes
	git fetch origin main
	git reset --hard origin/main

	export NODE_ENV=development
	#Install dependencies

	npm install

	# Run tests (To be implemented)
	# npm test
	export NODE_ENV=production
	# Build project
	npm run build

	#Deploy to /var/www/manga-reader/client
	rm -rf /var/www/mangaflux/*
	cp -r dist/* /var/www/mangaflux/
