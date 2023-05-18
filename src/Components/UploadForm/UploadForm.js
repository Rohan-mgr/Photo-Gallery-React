import React, { useState } from "react";
import ProgressBar from "../ProgressBar";
import "./UploadForm.css";

function UploadForm() {
  const [File, setFile] = useState(null);
  const [Error, setError] = useState(null);
  const imgTypes = ["image/png", "image/jpeg", "image/jpg"];
  const handleChange = (e) => {
    let selectedImg = e.target.files[0];
    if (selectedImg && imgTypes.includes(selectedImg.type)) {
      setFile(selectedImg);
      setError("");
    } else {
      setError(true);
    }
  };

  return (
    <div className="upload__form">
      <form>
        <label>
          <input type="file" onChange={handleChange} />
          <span>+</span>
        </label>
      </form>
      <div>
        {Error && <p>Select Item must be of jpeg, jpg or png format</p>}
        {File && <div style={{ textAlign: "center" }}>{File.name}</div>}
        {File && <ProgressBar file={File} setfile={setFile} />}
      </div>
    </div>
  );
}

export default UploadForm;
