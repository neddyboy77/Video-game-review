FROM node:18

# Set the working directory to /app
WORKDIR /usr/src/app

COPY package*.json ./

ARG PORT

EXPOSE $PORT

ARG APP_ENV

ENV NODE_ENV $APP_ENV

CMD ./bootstrap.sh