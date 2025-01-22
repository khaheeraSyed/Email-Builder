import React, { useState } from 'react';
import EmailEditor from './components/EmailEditor';
import ImageUploader from './components/ImageUploader';

function App() {
  const [template, setTemplate] = useState({
    title: '',
    content: '',
    imageUrl: ''
  });

  const handleTemplateUpdate = (field, value) => {
    setTemplate(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const submitTemplate = async () => {
    try {
      await axios.post('/api/uploadEmailConfig', template);
    } catch (error) {
      console.error('Template upload failed', error);
    }
  };

  return (
    <div className="container mx-auto">
      <EmailEditor 
        template={template}
        onUpdate={handleTemplateUpdate}
      />
      <ImageUploader 
        onImageUpload={(url) => handleTemplateUpdate('imageUrl', url)}
      />
      <button onClick={submitTemplate}>
        Generate Email Template
      </button>
    </div>
  );
}

export default App;
          
