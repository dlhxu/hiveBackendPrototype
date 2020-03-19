const usersController = require('../controllers').users;
const skillsController = require('../controllers').skills;

module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the users API!',
    }));

    app.post('/api/users', usersController.create);

    app.get('/api/users', usersController.list);

    app.post('/api/users/:userId/skills', skillsController.create);
};