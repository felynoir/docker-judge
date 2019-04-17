#!/bin/bash


TIME=$1
shift
FILEEXE=$1
shift
OUTPUT=$1
shift
FINISH=$1
shift
COMPILEERROR=$1
shift

FORMAT="%e REAL\n%S USER\n%K (KB) MEM" 
# format for time or memory usage default is verbose

echo "Executing..."
# timeout $TIME /usr/bin/time -f "${FORMAT}" ${FILEEXE} 2> ${FINISH} 1> ${OUTPUT} 
timeout $TIME /usr/bin/time --verbose ${FILEEXE} 2> ${FINISH} 1> ${OUTPUT} 

runtimestatus=$?
echo "RUNTIME STATUS: $runtimestatus"
if [ $runtimestatus -eq 137 ]
then
    echo "Memory Limit Exceed!"
    echo -e "\tsee in: ${FINISH}"
    exit 1
elif [ $runtimestatus -eq 124 ]
then
    echo "Time limit Exeed!"
    exit 1
elif [ $runtimestatus -ne 0 ]
then
    echo "Runtime error!"
    exit 1
fi
echo "Execution with timeout, memory success"
echo -e "\tdetail: ${FINISH}"
echo -e "\toutput: ${OUTPUT}"
