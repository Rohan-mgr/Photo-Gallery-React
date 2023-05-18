import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";
import "./ProgressBar.css";

function ProgressBar({ file, setfile }) {
  const { progress, url } = useStorage(file);
  useEffect(() => {
    if (url) {
      setfile(null);
    }
  }, [url, setfile]);
  console.log(progress, url);
  return (
    <div className="progress__bar">
      Uploading Image<span>.</span>
      <span>.</span>
      <span>.</span>
    </div>
  );
}

export default ProgressBar;
