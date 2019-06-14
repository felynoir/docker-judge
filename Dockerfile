FROM dragonfly161518/dind-judge:1.0.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm","start"]
