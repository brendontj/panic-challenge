const mongoose = require('mongoose');


const CandidateSchema = new mongoose.Schema({
    full_name: String,
    email: String,
    birthdate: Date,
    cpf: String,
    state_candidate: String,
    city: String,
    git: {
        username: String,
        avatar_url: String,
        git_bio: String
    } 
});

module.exports = mongoose.model('Candidate', CandidateSchema);