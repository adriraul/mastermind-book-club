import React from "react";
import BookCard from "./BookCard";
import { useState, useEffect } from "react";

const SectionReadingsGrid = () => {
  const [books, setBooks] = useState([]);
  const [totalRows, setTotalRows] = useState(0);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:5000/getBooks");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const booksData = await response.json();
        setBooks(booksData);
        setTotalRows(Math.ceil(booksData.length / 4));
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);
  const renderBooks = () => {
    let booksIndex = 0;
    let renderedBooks = [];

    for (let row = 0; row < totalRows; row++) {
      let rowBooks = [];
      for (let bookInRow = 0; bookInRow < 4; bookInRow++) {
        const book = books[booksIndex];
        if (book) {
          rowBooks.push(
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
              rowClass={"col-1-of-4"}
              cardClass={"card__medium"}
              customButtonClass={"__small"}
            />
          );
        }
        booksIndex++;
      }
      renderedBooks.push(<div className="row">{rowBooks}</div>);
    }
    return renderedBooks;
  };

  return (
    <section className="section-last-readings">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Some readings</h2>
      </div>
      {renderBooks()}
      <div className="section-last-readings__button-box">
        <button className="btn btn--brown2" onClick={scrollToTop}>
          Go up
        </button>
      </div>
    </section>
  );
};

export default SectionReadingsGrid;
