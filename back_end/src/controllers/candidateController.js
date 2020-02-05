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
        return res.status(201).json(candidate);
    },

    index: async (req, res) => { 
        const candidates = await Candidate.find();
        return res.status(200).json(candidates);
    },

    update: async (req, res) => { 
        const candidate_cpf = req.params.cpf;
        const { full_name, email, birthdate, state, city, github_username} = req.body;

        const responseGitApi = await axios.get(`https://api.github.com/users/${github_username}`);    
        const { avatar_url, bio} =  responseGitApi.data;

        const info = {
            full_name,
            email,
            birthdate,
            state,
            city,
            git: {
                username: github_username,
                avatar_url,
                git_bio: bio,
            }
        };

        Candidate.findOneAndUpdate({'cpf' : candidate_cpf}, info, { omitUndefined: true, useFindAndModify: false}, 
            (err) => {
                        if (err) 
                            return res.status(500).json({ error: err });
                        return res.status(200).json({ status: 'updated'});
                    });

    },

    delete: async (req, res) => { 
        const candidate_cpf = req.params.cpf;
        Candidate.deleteOne({'cpf' : candidate_cpf} , (err) => {
            if (err) 
                return res.status(500).json({ status: 'failed'});
            return res.status(200).json({ status: 'candidate deleted' });
        });
    }
}