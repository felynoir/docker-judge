#!/bin/bash
# : [name_image] [name_docker] [temp_path] [name_compile] [name_exe] [memory] [time]

DOCKERIMAGE=$1
# name of docker image
shift
NAMEDOCKER=$1
# name of docker container
shift
TEMPPATH=$1
# name of part for mount in docker
shift
NAMECOMPILE=$1
# name of shell script for compile file
shift
NAMEEXE=$1
# name of shell script for execution file
shift
MEM=$1
# memory limit for execution
shift
TIME=$1
shift
# time limit for esecution

FILEEXE="${TEMPPATH}/exe" 
# path for execution file
OUTPUT="${TEMPPATH}/output" 
# path for output file after execution
FINISH="${TEMPPATH}/finish" 
# path for time or memory usage in detail
COMPILEERROR="${TEMPPATH}/error" 
# path for compile error message

MAPPARAMS="$FILEEXE $OUTPUT $FINISH $COMPILEERROR"

echo "Starting docker."
#compile
docker run --name $NAMEDOCKER -it -m 256m -v $(pwd):/${TEMPPATH} ${DOCKERIMAGE} ${TEMPPATH}/${NAMECOMPILE}.sh $MAPPARAMS
dockercompile=$?
docker kill $NAMEDOCKER > /dev/null 2>&1
docker rm $NAMEDOCKER > /dev/null 2>&1
echo "compile docker status: $dockercompile"
if [ $dockercompile -ne 0 ]
then
    echo "compile fail!"
    exit $dockercompile 
fi
# run
docker run --name $NAMEDOCKER -it -m $MEM --memory-swap="${MEM}" -v $(pwd):/${TEMPPATH} ${DOCKERIMAGE} ${TEMPPATH}/${NAMEEXE}.sh $TIME $MAPPARAMS
dockerrun=$?
docker kill $NAMEDOCKER > /dev/null 2>&1
docker rm $NAMEDOCKER > /dev/null 2>&1
echo "execute docker status: $dockerrun"
if [ $dockerrun -ne 0 ]
then
    echo "execute fail"
    exit $dockerrun
fi
echo "Ending docker process."

exit
