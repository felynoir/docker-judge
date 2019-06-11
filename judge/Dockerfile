FROM cgswong/min-jessie:latest

# workaround
RUN echo "deb http://archive.debian.org/debian/ jessie main\ndeb-src http://archive.debian.org/debian/ jessie main\ndeb http://security.debian.org jessie/updates main\ndeb-src http://security.debian.org jessie/updates main" > /etc/apt/sources.list

# installing langauges compiler
RUN apt-get -y update && apt-get install -y --no-install-recommends gcc g++ time
