# get amd64 node image

FROM node:18-alpine

# Set the working directory to /app
WORKDIR /usr/src/app

COPY package*.json ./

ARG PORT

EXPOSE $PORT

ARG APP_ENV

ENV NODE_ENV $APP_ENV

ENTRYPOINT [ "npm", "run", "dev" ]