FROM node:18

# Set the working directory to /app
WORKDIR /usr/src/app

COPY package*.json ./

EXPOSE 8080

ARG APP_ENV

ENV NODE_ENV $APP_ENV

CMD ./bootstrap.sh