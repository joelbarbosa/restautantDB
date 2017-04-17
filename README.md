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

I used ES6 on backend with babel.<br />
In the frontend I just used the limitation in Node.<br />
I not bundle the project with webpack or any other framework.<br />
<br />
All test on backend are covered with jshint.<br />
Non-functional loops were avoided.<br />
<br />
The 'pascalprecht.translate', <br />
It was placed in the app module,<br /> 
just to show what we could do with translator, we could<br />
separete it for each language;<br />
<br />
We could split some items as user access in some directives,<br />
but it was avoided.<br />

For loggin in the backend I put my own lib called:<br />
https://www.npmjs.com/package/console4color<br />
I developer it just to put collor in node console.
