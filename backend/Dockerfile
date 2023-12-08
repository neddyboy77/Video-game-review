FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

ARG BACKEND_PORT

EXPOSE $BACKEND_PORT

ARG APP_ENV

ENV NODE_ENV $APP_ENV

CMD ./bootstrap.sh