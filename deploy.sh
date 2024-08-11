#!/bin/bash

	echo "Deployment started: $(date)"


	echo "Fetching Latest Updates"
	# Pull latest changes
	git fetch origin main
	git reset --hard origin/main

	#Install dependencies
	pwd
	npm install

	# Run tests (To be implemented)
	# npm test

	# Build project
	npm run build

	#Deploy to /var/www/manga-reader/client
	rm -rf /var/www/manga_reader/client/*
	cp -r dist/* /var/www/manga_reader/client/
