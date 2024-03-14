import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { Link, useParams } from "react-router-dom";
import SectionDetailBook from "../components/SectionDetailBook";
import SectionCategoryReviews from "../components/SectionCategoryReviews";

const BookDetailPage = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBookById = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/getBookById/${bookId}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const bookData = await response.json();
        console.log(bookData);
        setBook(bookData);
      } catch (error) {
        console.error("Error fetching book:", error);
      }
    };

    fetchBookById();
  }, [bookId]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Layout>
        <header className="readings-header">
          <Link to="/">
            <div className="readings-header__logo-box">
              <img
                src="/img/logo3.png"
                alt="Logo"
                className="readings-header__logo"
              />
            </div>
          </Link>

          <div className="readings-header__text-box">
            <h1 className="readings-heading-primary">
              <span className="readings-heading-primary--sub">Mastermind</span>
            </h1>
          </div>
        </header>

        {book && <SectionDetailBook {...book} />}
        {book && <SectionCategoryReviews reviews={book.reviews} />}
      </Layout>
    </>
  );
};

export default BookDetailPage;
