#!/bin/bash


TIME=$1
shift
FORMAT="%e REAL\n%S USER\n%"
FILEEXE="app/exe"
OUTPUT="app/output"
FINISH="app/finish"
g++ app/main.cpp -o ${FILEEXE}
echo "Compile And Save file executable as ${FILEEXE}"
timeout $TIME /usr/bin/time -f "${FORMAT}" ${FILEEXE} 2> ${FINISH} 1> ${OUTPUT} 
echo "Running with timeout in file ${FINISH}"

