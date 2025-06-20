import React, { useState } from 'react';
import ResumeParser from './ResumeParser';

function App() {
  const [resumeText, setResumeText] = useState('');

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (event) => {
      const text = event.target.result;
      setResumeText(text);
    };

    if (file.name.endsWith('.txt')) {
      reader.readAsText(file);
    } else {
      alert('Please upload only .txt files for now');
    }
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Upload Your Resume</h2>
      <input type="file" onChange={handleFileUpload} />
      {resumeText && <ResumeParser resumeText={resumeText} />}
    </div>
  );
}

export default App;
