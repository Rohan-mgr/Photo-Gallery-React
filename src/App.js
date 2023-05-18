import "./App.css";
import Title from "./Components/Title/Title";
import UploadForm from "./Components/UploadForm/UploadForm";
import ImageGrid from "./Components/ImageGrid/ImageGrid";
import Modal from "./Components/Modal/Modal";
import { useState } from "react";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;
