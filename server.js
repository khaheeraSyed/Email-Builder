const express = require('express');
const mongoose = require('mongoose');
const cloudinary = require('cloudinary').v2;
const EmailTemplate = require('./models/EmailTemplate');

const app = express();

mongoose.connect('mongodb://localhost/emailbuilder');

cloudinary.config({
  cloud_name: 'your_cloud_name',
  api_key: 'your_api_key',
  api_secret: 'your_api_secret'
});

app.post('/api/uploadEmailConfig', async (req, res) => {
  try {
    const template = new EmailTemplate(req.body);
    await template.save();
    res.status(201).json(template);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/getEmailLayout', (req, res) => {
  const layoutHTML = `
    <!DOCTYPE html>
    <html>
      <body>
        <div class="email-container">
          <h1>{{title}}</h1>
          <p>{{content}}</p>
          <img src="{{imageUrl}}" />
        </div>
      </body>
    </html>
  `;
  res.send(layoutHTML);
});

app.listen(5000, () => console.log('Server running'));
