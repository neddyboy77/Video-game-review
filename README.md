# Video-game-review

Big Tuna industries video game reviews

## Authors:

Tommy Nedow
Jordan Mack

Resume project that allows users to make personal reviews of games and find others that may peak their interest

## Dependencies

- Docker and docker compose (https://docs.docker.com/engine/install/ubuntu/)

## Recommended

- Visual studio code

## How to start project:

1. Create `.env` file by copying `.env.example`, renaming it to `.env` and filling out the empty variables with desired content

2. Go to project root
   `docker compose up --build --remove-orphans`

3. frontend can be accessed in browser by going to:
   http://localhost:8080 or (whatever port you have specified in the `.env` file)

4. backend routes can be tested by accessing
   http://localhost:3030 (or whatever port is specified in the `.env` file). or by testing in api tools (such as postman)

Docker should automatically handle what content to include depending on `APP_ENV` var.

To install packages to the front end or backend you must remote terminal into either service:
\*\* In vscode you can go to the docker tab on the left hand panel (whale icon), right click the service you are trying to access and click `Attach shell`. This will give you a terminal inside the container where you can use `npm` to install packages
