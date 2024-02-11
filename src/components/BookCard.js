import React from "react";

const BookCard = ({
  title,
  author,
  pages,
  presentationDate,
  label,
  recommendedBy,
  rating,
  imageUrl,
}) => {
  return (
    <div className="col-1-of-3">
      <div className="card">
        <div
          className={`card__side card__side--front card_side--front-${
            Math.floor(Math.random() * 3) + 1
          }`}
        >
          <div
            style={{ backgroundImage: `url(${imageUrl})` }}
            className={`card__picture
            `}
          >
            &nbsp;
          </div>
          <h4 className="card__heading">
            <span className={`card__heading-span card__heading-span--${label}`}>
              {label}
            </span>
          </h4>
          <div className="card__details">
            <ul>
              <li>
                <b>{title}</b>
              </li>
              <li>{author}</li>
              <li>{pages} pags.</li>
              <li>{presentationDate}</li>
              <li>{recommendedBy}</li>
            </ul>
          </div>
        </div>
        <div className="card__side card__side--back card__side--back-1">
          <div className="card__cta">
            <div className="card__book-review-box">
              <p className="card__book-review-title">Book Rating</p>
              <div className="card__book-review-value">
                <img
                  src={`img/${rating.toString().replace(".", "_")}stars.png`}
                  alt={`${rating} stars`}
                />
              </div>
            </div>
            <a href="" className="btn btn--white">
              Look this review
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
