import React, { useState, useEffect } from "react";

const BooksForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState("");
  const [description, setDescription] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [presentationDate, setPresentationDate] = useState("");
  const [label, setLabel] = useState("essential");
  const [outstanding, setOutstanding] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [members, setMembers] = useState([]);
  const [selectedMemberId, setSelectedMemberId] = useState("");
  const [file, setFile] = useState(null);

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

    fetchMembers();
  }, []);

  const handleSelectLabelChange = (e) => {
    setLabel(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bookData = {
      title,
      author,
      pages,
      description,
      synopsis,
      presentationDate,
      label,
      outstanding,
      recommendedBy: selectedMemberId,
      imageUrl,
    };

    try {
      const response = await fetch("http://localhost:5000/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      //const data = await response.json();
    } catch (error) {
      console.error("Error creating book:", error);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  return (
    <form className="admin__form" onSubmit={handleSubmit}>
      <div>
        <label className="admin__form__label">
          Title:
          <input
            className="admin__form__input"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label className="admin__form__label">
          Author:
          <input
            className="admin__form__input"
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label className="admin__form__label">
          Pages:
          <input
            className="admin__form__input"
            type="number"
            value={pages}
            onChange={(e) => setPages(e.target.value)}
            required
          />
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
          Synopsis:
          <textarea
            className="admin__form__textarea"
            value={synopsis}
            onChange={(e) => setSynopsis(e.target.value)}
            required
          ></textarea>
        </label>
      </div>
      <div>
        <label className="admin__form__label">
          Presentation Date:
          <input
            className="admin__form__input"
            type="date"
            value={presentationDate}
            onChange={(e) => setPresentationDate(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label className="admin__form__label">
          Label:
          <select
            className="admin__form__input"
            value={label}
            onChange={handleSelectLabelChange}
          >
            <option value="essential">Esencial</option>
            <option value="recommended">Recomendado</option>
            <option value="optional">Opcional</option>
            <option value="unnecessary">Innecesario</option>
          </select>
        </label>
      </div>
      <div>
        <label className="admin__form__label">
          Outstanding:
          <input
            className="admin__form__input"
            type="checkbox"
            checked={outstanding}
            onChange={(e) => setOutstanding(e.target.checked)}
          />
        </label>
      </div>
      <div>
        <label className="admin__form__label">
          Recommended By:
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
          Image:
          <input
            className="admin__form__input"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
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

export default BooksForm;
