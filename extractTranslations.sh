#!/bin/sh

echo "Starting extraction"

FILES=./src/assets/i18n/*
for f in $FILES
do
	echo "Extracting for $f "
	# take action on each file. $f store current file name
	ng2-translate-extract --dir ./src --output $f
done