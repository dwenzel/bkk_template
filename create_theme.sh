#! /bin/bash

DIR="$1"

if [ $# -ne 1 ]
then
	echo "Usage: $0 {new extension key}"
	exit 1
fi

if [ -d "../$DIR" ]
then
	echo "Directory/extension '$DIR' exists already!"
else
	cp -rf "../bkk_template" "../$DIR"
	echo "$DIR created."
	cd ../$DIR && grep -rl bkk_template . |xargs sed -i -e "s/modernpackage/$DIR/"
	echo "Changed all occurrences of bkk_template to $DIR."
	echo "Have fun with your theme!"
fi
