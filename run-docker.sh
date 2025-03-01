#!/bin/bash

# Load environment variables from .env file
export $(grep -v '^#' .env | xargs)

# Run Docker Compose
docker-compose up -d

echo "Application is running at http://localhost:8080" 