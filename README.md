# restautantDB
Just a code challenge with Angular and Node

# Project
The project are split in two projects:

```bash

1 - Frontend (front-api)
2 - Backend (server-api)

```

## Installation BackEnd
```bash

$ cd server-api
$ npm install 

```

## Tests BackEnd
```bash

$ cd server-api
$ npm test 

```

## Run BackEnd
```bash

$ cd server-api
$ npm start 

```

## Installation FrontEnd
```bash

$ cd front-api
$ npm install

```

## Tests FrontEnd
```bash

$ cd front-api
$ npm test 

```

## Run FrontEnd
```bash

$ cd front-api
$ npm start 

```

## About the Project

I use ES6 on backend with babel.
In the frontend I just used the limitation in Node.
I not bundle the project with webpack or any other framework.

All test on backend are covered with jshint.
Non-functional loops were avoided.

The 'pascalprecht.translate', 
It was placed, badly in the app module, 
just to show what we could do with translator.

We could split some items as user access in some directives,
but it was avoided.

For loggin in the backend I user my own lib called:
https://www.npmjs.com/package/console4color
I developer it just to put collor in node console.
