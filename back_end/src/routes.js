const { Router } = require ('express');
const axios = require('axios');

// Controllers
const CandidateController = require('./controllers/candidateController');

const routes = Router();

// Routes
routes.post('/candidate', CandidateController.store);
routes.get('/candidate', CandidateController.index);
routes.put('/candidate/:cpf', CandidateController.update);
routes.delete('/candidate/:cpf', CandidateController.delete);

module.exports = routes;