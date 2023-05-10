FROM node:14-alpine

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 5000

RUN npm run test

RUN npm install

CMD [ "node" , "index.js" ]