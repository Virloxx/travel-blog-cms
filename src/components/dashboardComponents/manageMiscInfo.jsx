"use client";

import { useRef, useState } from "react";

const ManageMiscInfo = () => {
  const uploadFormRef = useRef();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFileUpload = async () => {
    if (!file) return alert("Please select a file!");

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      const fileName = file.name;

      await fetch("/api/misc_info", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key: "bannerImage", value: fileName }),
      });
    } else {
      alert("File upload failed!");
    }
  };

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
    await handleFileUpload();
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
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpdateBanner}>Update Banner</button>
      </div>
    </section>
  );
};

export default ManageMiscInfo;
