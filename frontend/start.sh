#!/bin/bash

# Environment
echo "----------------------------------------"
echo "Environment"
node --version

# Build
echo "----------------------------------------"
echo "Build"
npm run build

# Start
echo "----------------------------------------"
echo "Start"
echo "----------------------------------------"

exec npm run start
