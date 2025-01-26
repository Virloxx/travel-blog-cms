'use client';

import { useRef } from 'react';
import UploadForm from '../../uploadForm/uploadForm';

const ManageMiscInfo = () => {
  const uploadFormRef = useRef();

  const handleUpdateBanner = () => {
    if (uploadFormRef.current) {
      uploadFormRef.current.submitForm();
    }
  };

  return (
    <section id="page-wrapper">
      <div className="edit-page">
        <h2>
          BANNER TITLE
          <textarea
            style={{ resize: 'none' }}
            name="title"
            id="post_title"
          />
        </h2>
        <h2>
          BANNER DESCRIPTION
          <textarea
            style={{ resize: 'none' }}
            name="desc"
            id="post_desc"
          />
        </h2>
        <UploadForm ref={uploadFormRef} />
        <button onClick={handleUpdateBanner}>Update Banner</button>
      </div>
    </section>
  );
};

export default ManageMiscInfo;
