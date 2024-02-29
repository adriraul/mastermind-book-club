import React from "react";
import BooksForm from "../components/forms/BooksForm";
import CategoriesForm from "../components/forms/CategoriesForm";
import ReviewsForm from "../components/forms/ReviewsForm";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

const AdminPage = () => {
  return (
    <>
      <Layout>
        <header className="readings-header u-margin-bottom-medium">
          <Link to="/">
            <div className="readings-header__logo-box">
              <img
                src="img/logo3.png"
                alt="Logo"
                className="readings-header__logo"
              />
            </div>
          </Link>

          <div className="readings-header__text-box">
            <h1 className="readings-heading-primary">
              <span className="readings-heading-primary--sub">Admin</span>
            </h1>
          </div>
        </header>
        <div className="row">
          <div className="col-1-of-3">
            <h2>Insertar libro</h2>
            <BooksForm />
          </div>
          <div className="col-1-of-3">
            <h2>Insertar categoría</h2>
            <CategoriesForm />
          </div>
          <div className="col-1-of-3">
            <h2>Insertar reseña</h2>
            <ReviewsForm />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AdminPage;
