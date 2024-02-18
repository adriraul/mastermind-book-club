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
  rowClass,
  cardClass,
  customButtonClass,
}) => {
  const parts = presentationDate.split("-");
  const formattedDate = `${parts[2]}-${parts[1]}-${parts[0]}`;

  return (
    <div className={`${rowClass}`}>
      <div className={`${cardClass}`}>
        <div
          className={`${cardClass}__side ${cardClass}__side--front ${cardClass}_side--front-${
            Math.floor(Math.random() * 3) + 1
          }`}
        >
          <div
            style={{ backgroundImage: `url(${imageUrl})` }}
            className={`${cardClass}__picture
            `}
          >
            &nbsp;
          </div>
          <h4 className={`${cardClass}__heading`}>
            <span
              className={`${cardClass}__heading-span ${cardClass}__heading-span--${label}`}
            >
              {label.substring(0, 1)}
            </span>
          </h4>
          <div className={`${cardClass}__details`}>
            <ul>
              <li>
                <b>{title}</b>
              </li>
              <li>{author}</li>
              <li>{pages} pags.</li>
              <li>{recommendedBy}</li>
              <li>{formattedDate}</li>
            </ul>
          </div>
        </div>
        <div
          className={`${cardClass}__side ${cardClass}__side--back ${cardClass}__side--back-1`}
        >
          <div className={`${cardClass}__cta`}>
            <div className={`${cardClass}__book-review-box`}>
              <p className={`${cardClass}__book-review-title`}>Book Rating</p>
              <div className={`${cardClass}__book-review-value`}>
                <img
                  src={`img/${rating.toString().replace(".", "_")}stars.png`}
                  alt={`${rating} stars`}
                />
              </div>
            </div>
            <a href="" className={`btn btn--white${customButtonClass}`}>
              Look this review
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
