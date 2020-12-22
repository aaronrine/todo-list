FROM node:latest

RUN mkdir -p /app
COPY package.json /app
COPY yarn.lock /app

WORKDIR /app
RUN yarn install

RUN yarn global add http-server

COPY ./public /app/public
COPY ./src /app/src

RUN yarn build

WORKDIR /app/build

CMD http-server -a 0.0.0.0 -p 80
