#!/bin/bash

# : [time]

# tt = $1
# shift

echo "Before timeout"

docker stop -t 15 $(e) 

echo "After timeout"

exit
