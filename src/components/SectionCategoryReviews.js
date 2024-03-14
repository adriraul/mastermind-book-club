import React from "react";

const SectionCategoryReviews = ({ reviews }) => {
  const getUniqueCategories = () => {
    const uniqueCategories = [];
    reviews.forEach((review) => {
      if (!uniqueCategories.some((cat) => cat.id === review.category.id)) {
        uniqueCategories.push(review.category);
      }
    });
    return uniqueCategories;
  };

  const calculateRoundedRating = (averageRating) => {
    let roundedRating = Math.round((averageRating / 2) * 2) / 2;
    roundedRating = Math.min(5, Math.max(0, roundedRating));
    return roundedRating % 1 === 0
      ? `${roundedRating}.0`
      : roundedRating.toString();
  };

  const calculateAverageRating = (categoryId) => {
    const categoryReviews = reviews.filter(
      (review) => review.category.id === categoryId
    );
    const totalRating = categoryReviews.reduce(
      (accumulator, review) => accumulator + parseFloat(review.rating),
      0
    );
    const averageRating =
      totalRating / (categoryReviews.length > 0 ? categoryReviews.length : 1);
    const formattedRating =
      averageRating % 1 === 0
        ? averageRating.toFixed(0)
        : averageRating.toFixed(2);

    return formattedRating;
  };

  return (
    <div className="section-category-reviews">
      {getUniqueCategories().map((category) => (
        <>
          <div key={category.id} className="category-review-item">
            <h3>{category.name}</h3>
          </div>
          <div className="category-review-item-rating">
            <div className="book-rating__number">
              {calculateAverageRating(category.id).replace(/\./g, ",")}
            </div>
            <img
              className="book-rating__image"
              src={`/img/${calculateRoundedRating(
                calculateAverageRating(category.id)
              )
                .toString()
                .replace(".", "_")}stars.png`}
              alt={` stars`}
            />
          </div>
        </>
      ))}
    </div>
  );
};

export default SectionCategoryReviews;
