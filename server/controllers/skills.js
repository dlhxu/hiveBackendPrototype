const Skill = require('../models').Skill;

module.exports = {
    create(req, res) {
        return Skill
            .create({
                skillname: req.body.skillname
            })
            .then(skill => res.status(201).send(skill))
            .catch(error => res.status(400).send(error));
    },
};