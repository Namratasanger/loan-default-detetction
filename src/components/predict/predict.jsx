import React, { useState } from "react";
import image from "images/collecting-data.png";
import upload from "images/upload.png";
import { Button, Content, DragDrop } from "components/predict/predictStyle.js";
import { eventWrapper } from "@testing-library/user-event/dist/utils";

export default function Predict() {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleChange = function (e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      // at least one file has been selected so do something
      // handleFiles(e.target.files);
    }
  };

  return (
    <Content>
      <img src={image} className="vector" />
      <form
        id="form-file-upload"
        onDragEnter={handleDrag}
        onSubmit={(e) => e.preventDefault()}
      >
        <input type="file" id="input-file-upload" onChange={handleChange} />
        <label id="label-file-upload" htmlFor="input-file-upload">
          <DragDrop>
            <img src={upload} className="upload-icon" />
            <div>Upload a file</div>
          </DragDrop>
        </label>
      </form>

      {/* <Button to="/predict">
        <span>Predict</span>
      </Button> */}
    </Content>
  );
}
