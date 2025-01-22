const express = require('express');
const router = express.Router();
const { 
  getEmailLayout, 
  uploadEmailConfig, 
  renderTemplate 
} = require('../controllers/emailController');

router.get('/getEmailLayout', getEmailLayout);
router.post('/uploadEmailConfig', uploadEmailConfig);
router.post('/renderTemplate', renderTemplate);

module.exports = router;
