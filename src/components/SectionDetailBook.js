import React, { useState } from "react";

const SectionDetailBook = ({
  title,
  author,
  pages,
  description,
  synopsis,
  label,
  rating,
  imageUrl,
  recommendedBy,
}) => {
  const [showFullSynopsis, setShowFullSynopsis] = useState(false);

  const toggleSynopsis = () => {
    setShowFullSynopsis(!showFullSynopsis);
  };

  let toggleButtonText = showFullSynopsis ? "Leer menos" : "Leer más";
  let truncatedSynopsis =
    synopsis.length > 780 ? `${synopsis.substring(0, 780)}... ` : synopsis;

  let roundedRating = Math.round((rating / 2) * 2) / 2;
  roundedRating = Math.min(5, Math.max(0, roundedRating));
  roundedRating =
    roundedRating % 1 === 0 ? `${roundedRating}.0` : roundedRating.toString();
  let recommendationLevel;
  if (label === "optional") {
    recommendationLevel = "Opcional";
  } else if (label === "recommended") {
    recommendationLevel = "Recomendado";
  } else if (label === "unnecessary") {
    recommendationLevel = "Innecesario";
  } else if (label === "essential") {
    recommendationLevel = "Esencial";
  }
  return (
    <section className="section-book-detail">
      <div className="section-book-detail__nav-button">
        <a className="btn-text" href="/readings">
          Go Back &larr;
        </a>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="section-book-detail--left">
            <img src={imageUrl} alt={title} className="book-image" />
          </div>
        </div>
        <div className="col-1-of-2">
          {" "}
          <div className="book-detail-right">
            <div className="book-detail-right-container">
              <h2 className="heading-secondary">{title}</h2>
              <h3 className="heading-tertiary u-margin-bottom-small">
                {" "}
                {author}
              </h3>
              <div className="book-rating">
                <div className="book-rating__number">
                  {rating.replace(/\./g, ",")}
                </div>
                <img
                  className="book-rating__image"
                  src={`/img/${roundedRating
                    .toString()
                    .replace(".", "_")}stars.png`}
                  alt={`${rating} stars`}
                />
                <div>
                  <span
                    className={`recomendation-label__heading-span recomendation-label__heading-span--${label}`}
                  >
                    {recommendationLevel}
                  </span>
                </div>
              </div>

              <p className="paragraph paragraph--details">
                {showFullSynopsis ? synopsis : truncatedSynopsis}
                {synopsis.length > 780 && (
                  <>
                    {" "}
                    <a className="btn-text__leer-mas" onClick={toggleSynopsis}>
                      {toggleButtonText}
                    </a>
                    {!showFullSynopsis}
                  </>
                )}
              </p>
              <p>
                Recomendado por {recommendedBy.name} {recommendedBy.surnames},{" "}
                {pages} páginas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionDetailBook;
