import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    education: '',
    experience: '',
    skills: '',
  });
  const [preview, setPreview] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async () => {
    try {
      await axios.post('http://localhost:5000/api/save-resume', formData);
      alert('Resume saved successfully!');
    } catch (error) {
      console.error('Error saving resume:', error);
      alert('Failed to save resume.');
    }
  };

  const handleGeneratePDF = async () => {
    const htmlContent = document.getElementById('resume-preview').innerHTML;
    try {
      const response = await axios.post(
        'http://localhost:5000/api/generate-pdf',
        { htmlContent },
        { responseType: 'blob' }
      );
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'resume.pdf');
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF.');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Resume Builder</h1>
      {!preview ? (
        <form
          style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '8px' }}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '8px' }}
            />
          </div>
          <div>
            <label>Education:</label>
            <textarea
              name="education"
              value={formData.education}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '8px' }}
            />
          </div>
          <div>
            <label>Experience:</label>
            <textarea
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '8px' }}
            />
          </div>
          <div>
            <label>Skills:</label>
            <textarea
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '8px' }}
            />
          </div>
          <button
            type="button"
            onClick={handleSave}
            style={{ padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none' }}
          >
            Save Resume
          </button>
          <button
            type="button"
            onClick={() => setPreview(true)}
            style={{ padding: '10px', backgroundColor: '#008CBA', color: 'white', border: 'none' }}
          >
            Preview Resume
          </button>
        </form>
      ) : (
        <div>
          <div
            id="resume-preview"
            style={{ border: '1px solid #ccc', padding: '20px', marginBottom: '20px' }}
          >
            <h2>{formData.name}</h2>
            <p>Email: {formData.email}</p>
            <h3>Education</h3>
            <p>{formData.education}</p>
            <h3>Experience</h3>
            <p>{formData.experience}</p>
            <h3>Skills</h3>
            <p>{formData.skills}</p>
          </div>
          <button
            onClick={() => setPreview(false)}
            style={{ padding: '10px', backgroundColor: '#f44336', color: 'white', border: 'none', marginRight: '10px' }}
          >
            Edit Resume
          </button>
          <button
            onClick={handleGeneratePDF}
            style={{ padding: '10px', backgroundColor: '#008CBA', color: 'white', border: 'none' }}
          >
            Download PDF
          </button>
        </div>
      )}
    </div>
  );
}