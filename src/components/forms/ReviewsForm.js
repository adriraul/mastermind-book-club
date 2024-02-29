import React, { useState, useEffect } from "react";

const ReviewsForm = () => {
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [selectedMemberId, setSelectedMemberId] = useState("");
  const [selectedBookId, setSelectedBookId] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [members, setMembers] = useState([]);
  const [books, setBooks] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch("http://localhost:5000/getMembers");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMembers(data);
      } catch (error) {
        console.error("Error fetching members:", error);
      }
    };

    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:5000/getBooks");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:5000/getCategories");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchMembers();
    fetchBooks();
    fetchCategories();
  }, []);

  const handleRatingChange = (e) => {
    const { value } = e.target;

    if (/^[0-9]*\.?[0-9]*$/.test(value)) {
      setRating(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const reviewData = {
      description,
      rating,
      memberId: selectedMemberId,
      bookId: selectedBookId,
      categoryId: selectedCategoryId,
    };

    try {
      const response = await fetch("http://localhost:5000/review", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reviewData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      //const data = await response.json();
    } catch (error) {
      console.error("Error creating review:", error);
    }
  };

  return (
    <form className="admin__form" onSubmit={handleSubmit}>
      <div>
        <label className="admin__form__label">
          Book:
          <select
            className="admin__form__select"
            value={selectedBookId}
            onChange={(e) => setSelectedBookId(e.target.value)}
            required
          >
            <option value="">Select a book</option>
            {books.map((book) => (
              <option key={book.id} value={book.id}>
                {book.title}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label className="admin__form__label">
          Category:
          <select
            className="admin__form__select"
            value={selectedCategoryId}
            onChange={(e) => setSelectedCategoryId(e.target.value)}
            required
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label className="admin__form__label">
          Member:
          <select
            className="admin__form__select"
            value={selectedMemberId}
            onChange={(e) => setSelectedMemberId(e.target.value)}
            required
          >
            <option value="">Select a member</option>
            {members.map((member) => (
              <option key={member.id} value={member.id}>
                {member.name}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label className="admin__form__label">
          Description:
          <textarea
            className="admin__form__textarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </label>
      </div>
      <div>
        <label className="admin__form__label">
          Rating:
          <input
            className="admin__form__input"
            type="text"
            value={rating}
            onChange={handleRatingChange}
            required
          />
        </label>
      </div>

      <button className="admin__form__button" type="submit">
        Crear
      </button>
    </form>
  );
};

export default ReviewsForm;
