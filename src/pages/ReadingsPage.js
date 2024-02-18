import React from "react";
import Layout from "../components/Layout";
import SectionReadingsGrid from "../components/SectionReadingsGrid";
import { Link } from "react-router-dom";

const ReadingsPage = () => {
  return (
    <>
      <Layout>
        <header className="readings-header">
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
              <span className="readings-heading-primary--sub">
                All our readings
              </span>
            </h1>
          </div>
        </header>
        <SectionReadingsGrid></SectionReadingsGrid>
      </Layout>
    </>
  );
};

export default ReadingsPage;
