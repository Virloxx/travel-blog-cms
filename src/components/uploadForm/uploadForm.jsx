import { useState, forwardRef, useImperativeHandle } from 'react';

const UploadForm = forwardRef((props, ref) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {

    const formData = new FormData();
    formData.append('file', file);

    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    if (res.ok) {
      alert('File uploaded successfully!');
    } else {
      alert('File upload failed!');
    }
  };

  useImperativeHandle(ref, () => ({
    submitForm: handleSubmit,
  }));

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
    </form>
  );
});

export default UploadForm;
