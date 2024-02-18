import React from "react";
import BookCard from "./BookCard";
import { useState, useEffect } from "react";
import { fetchBooks } from "../services/api";

const SectionReadingsGrid = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [totalRows, setTotalRows] = useState(0);
  const [searchInput, setSearchInput] = useState("");

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    fetchBooks().then((booksData) => {
      setBooks(booksData);
      setFilteredBooks(booksData);
      setTotalRows(Math.ceil(booksData.length / 4));
    });
  }, []);

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchInput(searchTerm);
    const filteredResults = books.filter(
      (book) =>
        book.title.toLowerCase().includes(searchTerm) ||
        book.author.toLowerCase().includes(searchTerm) ||
        book.recommendedBy.toLowerCase().includes(searchTerm)
    );
    setFilteredBooks(filteredResults);
    setTotalRows(Math.ceil(filteredResults.length / 4));
  };

  const renderBooks = () => {
    let booksIndex = 0;
    let renderedBooks = [];

    for (let row = 0; row < totalRows; row++) {
      let rowBooks = [];
      for (let bookInRow = 0; bookInRow < 4; bookInRow++) {
        const book = filteredBooks[booksIndex];
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
    <section className="section-all-readings">
      <div className="u-center-text u-margin-bottom-medium">
        <div class="search__container">
          <input
            onChange={handleSearch}
            type="text"
            placeholder="Search by title, author, or recommended by..."
          />
          <div class="search"></div>
        </div>
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
