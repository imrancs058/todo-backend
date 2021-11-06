# Getting Started with Create React TODOApp

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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
