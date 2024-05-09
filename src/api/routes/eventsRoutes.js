const express = require('express');
const router = express.Router();
const Event = require('../models/event');

// POST endpoint per inserir un esdeveniment
router.post('/events', async (req, res) => {
    try {
      const event = new Event(req.body);
      await event.save();
      res.status(201).send(event);
    } catch (err) {
      res.status(400).send(err.message);
    }
  });
  
  // Endpoint per recuperar un esdeveniment per ID
  router.get('/events/:id', async (req, res) => {
    try {
      const event = await Event.findById(req.params.id);
      if (!event) {
        return res.status(404).send("L'esdeveniment no s'ha trobat.");
      }
      res.send(event);
    } catch (err) {
      res.status(500).send(err.message);
    }
  });

module.exports = router;
