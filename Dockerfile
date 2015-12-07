FROM ubuntu:latest
MAINTAINER mukesh.thakur@ericsson.com

RUN apt-get update
RUN apt-get install -y nodejs nodejs-legacy npm
RUN apt-get clean

COPY ./package.json src/

RUN cd src && npm install

RUN npm install -g nodemon

COPY . /src

WORKDIR src/

CMD ["nodemon"]