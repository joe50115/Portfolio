import { useState } from "react";
import { svgPlaceholder } from "../utils/placeholder.js";

function Gallery({ label, items }) {
  const [openSrc, setOpenSrc] = useState(null);
  const [openAlt, setOpenAlt] = useState("");

  if (!items || items.length === 0) return null;

  function openLightbox(seed, caption) {
    setOpenSrc(svgPlaceholder(seed, label, 1600, 900));
    setOpenAlt(caption);
  }

  function closeLightbox() {
    setOpenSrc(null);
  }

  return (
    <>
      <h2 style={{ marginTop: "2em" }}>Gallery</h2>
      <div className="gallery-grid">
        {items.map((item) => (
          <figure className="gallery-item" key={item.seed}>
            <img
              src={svgPlaceholder(item.seed, label)}
              alt={item.caption}
              loading="lazy"
              onClick={() => openLightbox(item.seed, item.caption)}
            />
            <figcaption>{item.caption}</figcaption>
          </figure>
        ))}
      </div>

      <div className={`lightbox${openSrc ? " open" : ""}`} onClick={closeLightbox}>
        <button className="lb-close" onClick={closeLightbox}>Close ✕</button>
        {openSrc && <img src={openSrc} alt={openAlt} onClick={(e) => e.stopPropagation()} />}
      </div>
    </>
  );
}

export default Gallery;
