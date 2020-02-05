const axios = require ('axios');
const Candidate = require ('../models/Candidate');


module.exports = { 

    store: async (req, res) => {
        const { full_name, email, birthdate, cpf, state, city, github_username} = req.body;
        

        let candidate = await Candidate.findOne({ cpf });

        if (!candidate) {
            const responseGitApi = await axios.get(`https://api.github.com/users/${github_username}`);
            
            const { avatar_url, bio} =  responseGitApi.data;

            candidate = await Candidate.create( {
                full_name,
                email,
                birthdate,
                cpf,
                state,
                city,
                git: { 
                    username: github_username,
                    avatar_url,
                    git_bio: bio,
                }
            });
        }
        return res.status(201).json(candidate, {status: 'success'});
    },

    index: async (req, res) => { 

    },

    update: async (req, res) => { 

    },

    delete: async (req, res) => { 

    }
}