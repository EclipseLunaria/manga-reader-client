#!/bin/bash

LOG_FILE=/var/log/manga-reader/client/deploy.log

{
	echo "Deployment started: $(date)"


	echo "Fetching Latest Updates"
	# Pull latest changes
	git fetch origin main
	git reset --hard origin/main

	#Install dependencies
	npm install

	# Run tests (To be implemented)
	# npm test

	# Build project
	npm run build

	#Deploy to /var/www/manga-reader/client
	rm -rf /var/www/manga_reader/client/*
	cp -r dist/* /var/www/manga_reader/client/
} >> $LOG_FILE 2>&1
