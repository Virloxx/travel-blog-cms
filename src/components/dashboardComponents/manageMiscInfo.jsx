"use client";

import { useRef, useState } from "react";
import UploadForm from "../uploadForm/uploadForm";

const ManageMiscInfo = () => {
  const uploadFormRef = useRef();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleUpdateBanner = async () => {
    const updateTitleRes = await fetch("/api/misc_info", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ key: "bannerTitle", value: title }),
    });

    if (!updateTitleRes.ok) {
      alert("Failed to update banner title!");
      return;
    }

    const updateDescRes = await fetch("/api/misc_info", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ key: "bannerDesc", value: desc }),
    });

    if (!updateDescRes.ok) {
      alert("Failed to update banner description!");
      return;
    }

    alert("Banner updated successfully!");

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
            style={{ resize: "none" }}
            name="title"
            id="post_title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </h2>
        <h2>
          BANNER DESCRIPTION
          <textarea
            style={{ resize: "none" }}
            name="desc"
            id="post_desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </h2>
        <h2>BANNER PHOTO</h2>
        <UploadForm ref={uploadFormRef} />
        <button onClick={handleUpdateBanner}>Update Banner</button>
      </div>
    </section>
  );
};

export default ManageMiscInfo;
