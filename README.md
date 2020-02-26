# Geek-Text
CEN 4010 Project

## Getting Started

If you're on Mac/Linux, clone the repository then run 

`cd server && npm start`

This will start the client side of the application on localhost:3000 and the server side on port 3001. 


# TODO:
If you're on Windows, additional steps need to be taken.


While in the server directory, you will need to create your .env variables. .env is used to store sensitive data, such as keys or passwords. We can then access these variables by calling process.env.variableName, as seen in /server/index.js. In your terminal, while in /server, do

`shell > touch .env`

This will create your env file. Here you will need to create a few variables. You will need to retrieve an API key from Google to use their Books v1 API. Store this key in this file.
Then, you need to create a database schema using MySQL Workbench. You will need to copy that name into this file. You will also need to provide a username and password to access this database, all of this is stored in .env .


