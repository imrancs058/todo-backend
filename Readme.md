# Getting Started with Create React TODOApp
## Introduction
ToDo List App is a kind of app that generally used to maintain our day-to-day tasks or list everything that we have to do, with the most important tasks at the top of the list, and the least important tasks at the bottom. It is helpful in planning our daily schedules.
So this is API that handle todo requests

## Technology
Nodejs 16 version with express framework(ES4)
## Architecture
MVC with 3 tier architecture
Any business logic will go into BAL files
Database interactions will be done in DAL files.

## Coding help
Create router file in routes folder then add that file in index.js file
Write routes in router file for handling requests. Create BAL and DAL files.
Router will call BAL file and BAL will cal DAL file,then data will be returned back

##Contract driven Tests
Consumer-driven contract (CDC) tests are a technique to test integration points between API providers and API consumers without the hassle of end-to-end tests
Here we used CDC so that if we move to next version of API then previous versions should remain stable
## Available Scripts

To build docker image:

### `docker-compose up -d --build`

Run the docker with command\
### ` docker-compose start`
Now you can access app by http://localhost:3333/todo
If you want to run it without docker then

### `node app.js`
And you can use api by this url http://localhost:3322


To run Unit and Integration Tests
###`npm run test`
To run pact Test
There should be pact created  on pactflow site through frontend TO-Do app then run following command
### `npm run test:pact`
