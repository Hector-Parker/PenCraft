import React from "react";
import { Header } from "./Header";
import { Footer } from "./footer";
import bgImage from "./Person Reading.jpg";
import groupImage from "./group discussion.jpg";
import genreImage from "./Genre.jpg";
import ReactDom from "react-dom/client";

export const Home = () => {
  return (
    <>
      <Header></Header>
      <div
        className="border-bottom container col-xxl-8 px-4 py-5 d-flex align-center"
        style={{ height: "calc(100vh - 72px)" }}
      >
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={bgImage}
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">
              Discover & Share Stories
            </h1>
            <p className="lead">
              Unleash your creativity and share your stories with the world.
            </p>
            <p className="lead">
              Dive into captivating tales from talented authors around the
              globe.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2"
              >
                Start Writing
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                Explore Stories
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="border-bottom container col-xxl-8 px-4 py-5 d-flex align-center"
        style={{ height: "100svh" }}
      >
        <div className="row flex-lg-row align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={genreImage}
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">
              Dive into Your Favorite Genre
            </h1>
            <p className="lead">
              Whether you're a fan of pulse-pounding mysteries, heartwarming
              romance, epic fantasy, or thought-provoking science fiction, we've
              got something for everyone. Our platform hosts a diverse range of
              genres, curated to satisfy every literary craving. Discover new
              voices and immerse yourself in stories that resonate with you.
            </p>
          </div>
        </div>
      </div>
      <div
        className="container col-xxl-8 px-4 py-5 d-flex align-center"
        style={{ height: "100svh" }}
      >
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={groupImage}
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">
              Connect, Engage, and Inspire
            </h1>
            <p className="lead">
              Join a community of passionate readers and writers who share your
              love for storytelling. From lively discussions in forums to
              interactive writing challenges and author Q&A sessions, there's
              always something exciting happening here. Forge connections,
              exchange ideas, and be inspired by fellow enthusiasts on your
              journey through the world of literature.
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};
