import React from "react";
import useFirestore from "../../hooks/useFirestore";
import "./ImageGrid.css";
import { motion } from "framer-motion";

function ImageGrid({ setSelectedImg }) {
  const { docs, imgCollection } = useFirestore("images");
  return (
    <>
      {docs.length === 0 ? (
        imgCollection ? (
          <div className="progress__bar">
            Loading Images<span>.</span>
            <span>.</span>
            <span>.</span>
          </div>
        ) : (
          <p style={{ margin: "10px", color: "pink", textAlign: "center" }}>
            No Images In Firestore. Please Upload Some Images first.
          </p>
        )
      ) : (
        <div className="image__grid">
          {docs.map((doc) => {
            return (
              <motion.div
                layout
                whileHover={{ opacity: 1 }}
                className="image__wrapper"
                key={doc.id}
                onClick={() => setSelectedImg(doc.url)}
              >
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  src={doc.url}
                  alt={doc.id}
                />
              </motion.div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default ImageGrid;
