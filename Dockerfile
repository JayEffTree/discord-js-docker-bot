FROM node:carbon

WORKDIR /usr/src/app

COPY package.json ./

RUN npm i -g npm@latest

RUN npm install

RUN npm install discordjs/discord.js

VOLUME /usr/src/app/node_modules/

COPY . .

CMD [ "npm", "start" ]
