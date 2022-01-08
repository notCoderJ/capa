const path = require('path');
const jsonServer = require('json-server');

// Create json-server
const server = jsonServer.create();
// Set routing file
const router = jsonServer.router(path.resolve(__dirname, 'requests.json'));
// Set App to execute
const middlewares = jsonServer.defaults({
  static: path.resolve(__dirname, '../build/'),
});
// Set Port
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(jsonServer.bodyParser); // To handle POST, PUT and PATCH
server.use(router);

server.listen(port, () => {
  console.log('JSON Server is running');
});
