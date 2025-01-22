import React from 'react';

function EmailEditor({ template, onUpdate }) {
  return (
    <div className="space-y-4">
      <input 
        placeholder="Email Title"
        value={template.title}
        onChange={(e) => onUpdate({...template, title: e.target.value})}
        className="w-full p-2 border rounded"
      />
      <textarea 
        placeholder="Email Content"
        value={template.content}
        onChange={(e) => onUpdate({...template, content: e.target.value})}
        className="w-full p-2 border rounded h-32"
      />
    </div>
  );
}

export default EmailEditor;
