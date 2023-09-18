const express = require('express');
const router = express.Router();
const issueController = require('../controllers/issueController');

router.get('/new/:id', issueController.showIssueForm);
router.post('/', issueController.createIssue);

module.exports = router;
