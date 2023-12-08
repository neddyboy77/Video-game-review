FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

EXPOSE 3000

ARG APP_ENV

ENV NODE_ENV $APP_ENV

CMD ./bootstrap.sh