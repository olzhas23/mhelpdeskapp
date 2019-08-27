const express = require('express');
const router = express.Router();
const RepositoryController = require('../controllers/repositoryControllers');
const TemplateController =require('../controllers/templateController');

router.get('/templates', TemplateController.template_list);

router.get('/repositories', RepositoryController.repository_list);


module.exports = router;