#!/bin/bash

# : [name] [time]

NAME=$1
shift

echo "Starting docker."
docker run --rm --name NAME -it -v $(pwd):/app cpprun app/Processing.sh $@
echo "Ending docker process."

exit
