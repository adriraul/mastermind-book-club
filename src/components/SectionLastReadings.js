import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";

const SectionLastReadings = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/getOutstandingBooks"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const booksData = await response.json();
        setBooks(booksData);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <section className="section-last-readings">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Some readings</h2>
      </div>
      <div className="row">
        {books.map((book) => (
          <BookCard
            key={book.id}
            title={book.title}
            author={book.author}
            pages={book.pages}
            presentationDate={book.presentationDate}
            label={book.label}
            recommendedBy={book.recommendedBy}
            rating={book.rating}
            imageUrl={book.imageUrl}
          />
        ))}
      </div>
      <div className="section-last-readings__button-box">
        <a href="" className="btn btn--brown2">
          Go to all readings
        </a>
      </div>
    </section>
  );
};

export default SectionLastReadings;
