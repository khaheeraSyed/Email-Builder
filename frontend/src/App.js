import React, { useState } from 'react';
import EmailEditor from './components/EmailEditor';
import ImageUploader from './components/ImageUploader';

function App() {
  const [template, setTemplate] = useState({
    title: '',
    content: '',
    imageUrl: ''
  });

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/uploadEmailConfig', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(template)
      });
      // Handle response
    } catch (error) {
      console.error('Template upload failed', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4">Email Template Builder</h1>
      <EmailEditor 
        template={template} 
        onUpdate={setTemplate}
      />
      <ImageUploader 
        onImageUpload={(url) => setTemplate(prev => ({...prev, imageUrl: url}))}
      />
      <button 
        onClick={handleSubmit}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Generate Template
      </button>
    </div>
  );
}

export default App;
          
