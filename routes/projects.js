const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

router.get('/', projectController.listProjects);
router.get('/new', projectController.showProjectForm);
router.post('/', projectController.createProject);
router.get('/:id', projectController.showProjectDetails);

module.exports = router;
