import React, { useState } from "react";

const CategoriesForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/category", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, description }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      //const data = await response.json();
    } catch (error) {
      console.error("Error creating category:", error);
    }
  };

  return (
    <form className="admin__form" onSubmit={handleSubmit}>
      <div>
        <label className="admin__form__label">
          Name:
          <input
            className="admin__form__input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
      <button className="admin__form__button" type="submit">
        Crear
      </button>
    </form>
  );
};

export default CategoriesForm;
