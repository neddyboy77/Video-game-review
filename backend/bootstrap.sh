
# if there is a package.json file
if [ -f package.json ]; then
    if [ "$APP_ENV" = "production" ]; then
            echo "Installing only production node modules"
            npm install --only=production --omit=dev
            npm run start
    else
            npm install
            npm run dev
    fi
fi