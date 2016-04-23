#!/bin/bash
cd "$(dirname "$0")"
./build.sh
rsync -avz --delete --exclude '.git' -e ssh . chad@jobhunt.in:~/sites/jobhunt.in/
