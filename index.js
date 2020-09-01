const express = require('express');

const Hubs = require("./hubs/hubs-model.js");
const hubsRouter = require("./hubs/hubs-router.js");
const productsRouter = require("./products/products-router.js");
const clientsRouter = require("./clients/clients-router.js");
const suppliersRouter = require("./suppliers/suppliers-router.js");

const server = express();

server.use(express.json());

//for urls beginning with /api/hubs use the router
server.use('/api/hubs', hubsRouter); //router to extract hubs routes from resource
server.use('/api/products', productsRouter);
server.use('/api/clients', clientsRouter);
server.use('/api/suppliers', suppliersRouter);

server.get('/', (req, res) => {
  res.send(`
    <h2>Lambda Hubs API</h>
    <p>Welcome to the Lambda Hubs API</p>
  `);
});








// add an endpoint that returns all the messages for a hub
// add an endpoint for adding new message to a hub

server.listen(4000, () => {
  console.log('\n*** Server Running on http://localhost:4000 ***\n');
});
