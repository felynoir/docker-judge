#!/bin/bash

# : [name] [memory] [time]

NAME=$1
shift
MEM=$1
shift

echo "Starting docker."
docker run --name $NAME -it -m $MEM --memory-swap="${MEM}" -v $(pwd):/app cpprun app/Processing.sh $@
# docker inspect $NAME
docker kill $NAME > /dev/null 2>&1
docker rm $NAME
echo "Ending docker process."

exit
