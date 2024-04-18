import React, { useRef } from "react";
import style from "../assets/fileupload.module.css";

function FileUploader({ handleFile }) {
  const hiddenFileInput = useRef(null);

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    handleFile(fileUploaded);
  };

  return (
    <>
      <button
        type="button"
        className={style.buttonUpload}
        onClick={() => {
          hiddenFileInput.current.click();
        }}
      >
        Upload Image
      </button>
      <input
        type="file"
        onChange={handleChange}
        ref={hiddenFileInput}
        style={{ display: "none" }}
      />
    </>
  );
}

export default FileUploader;
