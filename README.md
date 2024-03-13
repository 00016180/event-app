Event Planning App

About app
Event Planning App - is simple web application for planning events. In this application, user can add new events, delete them, update their information and browse list of events.

Runing the app locally
Clone the repository - https://github.com/00016180/event-app.git
Open project file in VSCode
Install dependencies by typing 'npm install' in terminal
Start the app by typing 'npm start' in terminal
Open your browser and navigate to 'http://localhost:3000'

Dependencies' list
"express": "^4.18.3",
"express-validator": "^7.0.1",
"nodemon": "^3.1.0",
"pug": "^3.0.2"

Also:
Bootstrap
Axios
Font-awesome
Tempus-dominus


Structure of Event Planning App
1. app.js - main js file
2. package.json - project configuration file
3. .gitignore - used for avoiding pushing node_modules file to GitHub
4. /public/ - public folder is for keeping files essential for building user-interface (client-side)
     /css/
       /styles.css
     /js
5. /routes/ - routes files will keep handlers for specific route groups
     /api/
       /index.js
       /event/
         /index.js
     /web/
       /index.js
       /home/
         /index.js
6. /views/
     /head.pug
     /home/
       /index.pug
       /add_update.pug
7. /controllers/ - contains controller logic to shows which services will be used in order to handle routed actions
     /api/
       /event/
         /index.js 
     /web/
       /home/
         /index.js
8. /services/ - contains service layer logic
     /event/
       /index.js
9. /data/ - contains database
     /mock_db.json

Links
GitHub - https://github.com/00016180/event-app.git
Available in - https://event-app-00016180.onrender.com
