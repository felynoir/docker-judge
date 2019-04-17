#!/bin/bash

echo $@

FILEEXE=$1 
shift
OUTPUT=$1 
shift
FINISH=$1 
shift
COMPILEERROR=$1 
shift

echo "Compiling..."
g++ app/main.cpp -o ${FILEEXE} 2> ${COMPILEERROR}
compilestatus=$?
echo "COMPILE STATUS: $compilestatus"
if [ $compilestatus -eq 4 ]
then
    echo "Memory Complication Limit Exceed!"
    echo "Server Fault!"
    exit 1
elif [ $compilestatus -ne 0 ]
then
    echo "Complication failed!"
    echo -e "\tcompile error message is in: ${COMPILEERROR}"
    exit 1
fi
echo "Compile And Save file executable as ${FILEEXE}"

exit 0