import "./App.css";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Layout>
        <header className="header">
          <div className="header__logo-box">
            <img src="img/logo3.png" alt="Logo" className="header__logo" />
          </div>

          <div className="header__text-box">
            <h1 className="heading-primary">
              <span className="heading-primary--main">
                Mastermind Book Club
              </span>
              <span className="heading-primary--sub">
                All about our readings
              </span>
            </h1>

            <a href="#" className="btn btn--white btn--animated">
              Go to readings
            </a>
          </div>
        </header>

        <main>
          <section className="section-about">
            <div className="u-center-text u-margin-bottom-big">
              <h2 className="heading-secondary">
                History and reviews of mastermind readings
              </h2>
            </div>
            <div className="row">
              <div className="col-1-of-2">
                <h3 className="heading-tertiary u-margin-bottom-small">
                  All our history
                </h3>
                <p className="paragraph">
                  You can find our entire reading history and see some main
                  information about each of the books read, as well as the
                  title, author, number of pages, synopsis and more!
                </p>
                <h3 className="heading-tertiary u-margin-bottom-small">
                  All our reviews
                </h3>
                <p className="paragraph">
                  You will be able to see the average and individual score that
                  we have assigned to each of the books, and some notes and
                  comments about them!
                </p>
                <a href="#" className="btn-text">
                  Learn more &rarr;
                </a>
              </div>
              <div className="col-1-of-2">
                <div className="composition">
                  <img
                    src="img/seneca.jpg"
                    alt="seneca"
                    className="composition__photo composition__photo--p2"
                  />
                  <img
                    src="img/principios.jpg"
                    alt="principios"
                    className="composition__photo composition__photo--p1"
                  />
                  <img
                    src="img/burlar-al-diablo.jpg"
                    alt="burlar-al-diablo"
                    className="composition__photo composition__photo--p3"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="section-features">
            <div className="row">
              <div className="col-1-of-4">
                <div className="feature-box">
                  <i className="feature-box__icon icon-basic-archive-full"> </i>
                  <h3 className="heading-tertiary">
                    Content and Practical Applicability
                  </h3>
                  <p className="feature-box__text">
                    Evaluate the usefulness and applicability of the concepts
                    presented in the book for personal development. <br />
                    <br />
                    Discuss how the principles or advice offered can be
                    implemented in everyday life.
                  </p>
                </div>
              </div>

              <div className="col-1-of-4">
                <div className="feature-box">
                  <i className="feature-box__icon icon-basic-share"> </i>
                  <h3 className="heading-tertiary">
                    Philosophical or Theoretical Foundation
                  </h3>
                  <p className="feature-box__text">
                    Analyze the philosophical or theoretical basis on which the
                    ideas presented in the book are grounded. <br />
                    <br />
                    Consider the strength of the arguments and whether they are
                    supported by evidence or relevant experiences.
                  </p>
                </div>
              </div>

              <div className="col-1-of-4">
                <div className="feature-box">
                  <i className="feature-box__icon icon-basic-bolt"> </i>
                  <h3 className="heading-tertiary">
                    Emotional and Motivational Impact
                  </h3>
                  <p className="feature-box__text">
                    Reflect on how the book emotionally affects the reader.{" "}
                    <br />
                    <br />
                    Discuss whether the book motivates and inspires, and in what
                    ways it can bring about positive changes in attitude and
                    perspective.
                  </p>
                </div>
              </div>

              <div className="col-1-of-4">
                <div className="feature-box">
                  <i className="feature-box__icon icon-clarity icon-basic-spread-text-bookmark"></i>
                  <h3 className="heading-tertiary">
                    Clarity in Presenting Ideas
                  </h3>
                  <p className="feature-box__text">
                    Evaluate the clarity and coherence in the presentation of
                    concepts. <br />
                    <br />
                    Analyze whether the author successfully conveys their ideas
                    in a understandable and accessible manner for the reader.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="section-last-readings">
            <div className="u-center-text u-margin-bottom-big">
              <h2 className="heading-secondary">Some readings</h2>
            </div>
            <div className="row">
              <div className="col-1-of-3">
                <div className="card">
                  <div className="card__side card__side--front card_side--front-1">
                    <div className="card__picture card__picture--1">&nbsp;</div>
                    <h4 className="card__heading">
                      <span className="card__heading-span card__heading-span--essential">
                        Essential
                      </span>
                    </h4>
                    <div className="card__details">
                      <ul>
                        <li>
                          <b>Meditaciones</b>
                        </li>
                        <li>Marco Aurelio</li>
                        <li>164 pags.</li>
                        <li>21/02/2024</li>
                        <li>Adrián Vacas</li>
                      </ul>
                    </div>
                  </div>
                  <div className="card__side card__side--back card__side--back-1">
                    <div className="card__cta">
                      <div className="card__book-review-box">
                        <p className="card__book-review-title">Book Rating</p>
                        <div className="card__book-review-value">
                          <img src="img/4_5stars.png" alt="" />
                        </div>
                      </div>
                      <a href="" className="btn btn--white">
                        Look this review
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-1-of-3">
                <div className="card">
                  <div className="card__side card__side--front card_side--front-2">
                    <div className="card__picture card__picture--2">&nbsp;</div>
                    <h4 className="card__heading">
                      <span className="card__heading-span card__heading-span--optional">
                        Optional
                      </span>
                    </h4>
                    <div className="card__details">
                      <ul>
                        <li>
                          <b>El arte de la guerra</b>
                        </li>
                        <li>Sun Tzu</li>
                        <li>93 pags.</li>
                        <li>22/01/2024</li>
                        <li>Sergio Casanova</li>
                      </ul>
                    </div>
                  </div>
                  <div className="card__side card__side--back card__side--back-1">
                    <div className="card__cta">
                      <div className="card__book-review-box">
                        <p className="card__book-review-title">Book Rating</p>
                        <div className="card__book-review-value">
                          <img src="img/3_5stars.png" alt="" />
                        </div>
                      </div>
                      <a href="" className="btn btn--white">
                        Look this review
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-1-of-3">
                <div className="card">
                  <div className="card__side card__side--front card_side--front-3">
                    <div className="card__picture card__picture--3">&nbsp;</div>
                    <h4 className="card__heading">
                      <span className="card__heading-span card__heading-span--unnecessary">
                        Unnecessary
                      </span>
                    </h4>
                    <div className="card__details">
                      <ul>
                        <li>
                          <b>Principios</b>
                        </li>
                        <li>Rai Dalio</li>
                        <li>608 pags.</li>
                        <li>31/10/2023</li>
                        <li>Sergio Casanova</li>
                      </ul>
                    </div>
                  </div>
                  <div className="card__side card__side--back card__side--back-1">
                    <div className="card__cta">
                      <div className="card__book-review-box">
                        <p className="card__book-review-title">Book Rating</p>
                        <div className="card__book-review-value">
                          <img src="img/1_5stars.png" alt="" />
                        </div>
                      </div>
                      <a href="" className="btn btn--white">
                        Look this review
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section-last-readings__button-box">
              <a href="" className="btn btn--brown2">
                Go to all readings
              </a>
            </div>
          </section>

          <section className="section-contact">
            <div className="row">
              <div className="contact">
                <div className="contact__form">
                  <form action="#" className="form">
                    <div className="u-center-text u-margin-bottom-small">
                      <h2 className="heading-secondary">Contact us</h2>
                    </div>
                    <div className="form__group">
                      <input
                        type="text"
                        className="form__input"
                        placeholder="Full Name"
                        id="name"
                        required
                      />
                      <label htmlFor="name" className="form__label">
                        Full name
                      </label>
                    </div>
                    <div className="form__group">
                      <textarea
                        name="message"
                        className="form__textarea"
                        id="message"
                        rows="4"
                        placeholder="Message"
                        required
                      ></textarea>
                      <label htmlFor="message" className="form__label">
                        Message
                      </label>
                    </div>
                    <div className="form__group">
                      <button className="btn btn--brown2">Send</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}

export default App;
