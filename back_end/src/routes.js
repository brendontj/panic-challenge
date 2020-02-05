const { Router } = require ('express');
const axios = require('axios');

// Controllers
const CandidateController = require('./controllers/candidateController');

const routes = Router();

// Routes
routes.post('/candidate', CandidateController.store);
routes.get('/candidate', CandidateController.index);
routes.put('/candidate/:id', CandidateController.update);
routes.delete('/candidate/:id', CandidateController.delete);

module.exports = routes;