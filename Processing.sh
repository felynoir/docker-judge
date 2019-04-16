#!/bin/bash


TIME=$1
shift
FORMAT="%e REAL\n%S USER\n%K (KB) MEM"
FILEEXE="app/exe"
OUTPUT="app/output"
FINISH="app/finish"
COMPILEERROR="app/error"
echo "Compile And Save file executable as ${FILEEXE}"
# TODO: Compile in another container.
g++ app/main.cpp -o ${FILEEXE} 2> ${COMPILEERROR}
compilestatus=$?
echo "COMPILE $compilestatus"
if [ $compilestatus -eq 4 ]
then
    echo "Memory Complication Limit Exceed!"
    cat /usr/share/doc/gcc-4.9/README.Bugs
    exit
elif [ $compilestatus -ne 0 ]
then
    echo "Complication failed!"
    exit
fi
# timeout $TIME /usr/bin/time -f "${FORMAT}" ${FILEEXE} 2> ${FINISH} 1> ${OUTPUT} 
timeout $TIME /usr/bin/time --verbose ${FILEEXE} 2> ${FINISH} 1> ${OUTPUT} 
runtimestatus=$?
echo "RUNTIME $runtimestatus"
if [ $runtimestatus -eq 137 ]
then
    echo "Memory Limit Exceed!"
    exit
elif [ $runtimestatus -ne 0 ]
then
    echo "Runtime error!"
    exit
fi
echo "Running with timeout in file ${FINISH}"
