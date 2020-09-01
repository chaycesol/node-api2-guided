const express = require('express');

const Hubs = require("./hubs-model.js");

const router = express.Router(); //GOTCHA! uppercase R and you need to invoke Router.



router.get('/', (req, res) => {
    const query = req.query;
    console.log("req.query" + req.query)

    Hubs.find(req.query)
    .then(hubs => {
      res.status(200).json({query: req.query, data: hubs});
    })
    .catch(error => {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: 'Error retrieving the hubs',
      });
    });
  });
  
  router.get('/:id', (req, res) => {
    Hubs.findById(req.params.id)
    .then(hub => {
      if (hub) {
        res.status(200).json(hub);
      } else {
        res.status(404).json({ message: 'Hub not found' });
      }
    })
    .catch(error => {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: 'Error retrieving the hub',
      });
    });
  });
  
  router.post('/', (req, res) => {
    Hubs.add(req.body)
    .then(hub => {
      res.status(201).json(hub);
    })
    .catch(error => {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: 'Error adding the hub',
      });
    });
  });
  
  router.delete('/:id', (req, res) => {
    Hubs.remove(req.params.id)
    .then(count => {
      if (count > 0) {
        res.status(200).json({ message: 'The hub has been nuked' });
      } else {
        res.status(404).json({ message: 'The hub could not be found' });
      }
    })
    .catch(error => {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: 'Error removing the hub',
      });
    });
  });
  
  router.put('/:id', (req, res) => {
    const changes = req.body;
    Hubs.update(req.params.id, changes)
    .then(hub => {
      if (hub) {
        res.status(200).json(hub);
      } else {
        res.status(404).json({ message: 'The hub could not be found' });
      }
    })
    .catch(error => {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: 'Error updating the hub',
      });
    });
  });

// add an endpoint that returns all the messages for a hub
// ex. SUBROUTE: /api/hubs/123/messages - when you have a URL that is getting a sub resource of that 
// when something belongs to something else and it only makes sense within that context, do a subroute
router.get('/:id/messages', (req, res) => {
    // code here for messages
})


//example reactions to a message in slack if we know the message id
// /api/messages/:id/reactions


//orders for a client
// /api/client/orders/:id

//product in electronics
// /api/products?&cat=electronics

  module.exports = router;
