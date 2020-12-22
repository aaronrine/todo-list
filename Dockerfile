FROM node:latest as build


RUN mkdir -p /app
COPY package.json /app
COPY yarn.lock /app

WORKDIR /app
RUN yarn install

COPY ./public /app/public
COPY ./src /app/src

RUN yarn build

WORKDIR /app/build

FROM nginx:latest

COPY --from=build /app/build /usr/share/nginx/html

