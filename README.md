Node-React Starter project
=======

It will help you start a new project quickly: ExpressJS, Socket.io, Redis connection and React + Browserify.

## Installation
This projects requires `nodejs`, `npm`, `redis`, `browserify`, `watchify` and `mocha` (for testing) to be installed.

Clone and install the dependencies:

```
git clone https://github.com/maxdec/node-react-starter
cd node-react-starter
npm install
```

## Utilisation
Launch the app:

```
npm start
```

Launch Watchify:

```
npm run watch
```

Then open your browser at `http://localhost:3000`.

For **production** deployment you can run:

```
npm run build
```

to build `bundle.js` with Browserify.
