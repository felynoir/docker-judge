#!/bin/sh

echo "Provide sleep time in the form of NUMBER[SUFFIX]"
echo "   SUFFIX may be 's' for seconds (default), 'm' for minutes,"
echo "   'h' for hours, or 'd' for days."

echo "begin allocating memory..."
for index in $(seq 1000); do
    value=$(seq -w -s '' $index $(($index + 1000)))
    eval array$index=$value
done
echo "...end allocating memory"
delay=2
echo "sleeping for $delay"
sleep $delay