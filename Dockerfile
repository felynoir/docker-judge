FROM dragonfly161518/dind-judge:1.0.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN sudo service docker start

COPY . .

CMD [ "npm", "start" ]