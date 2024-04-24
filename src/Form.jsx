import React from "react";

export const Form = () => {
  return (
    <>
      <section
        className="container-fluid bg-dark text-light p-5"
        style={{ height: "calc(100vh - 72px)", height: "calc(100svh - 72px)" }}
      >
        <div className="container w-50 text-light p-2">
          <form className="row g-3 p-3">
            <div className="col-8 mx-auto">
              <label for="inputEmail4" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" id="inputEmail4" />
            </div>
            <div className="col-8 mx-auto">
              <label for="inputPassword4" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword4"
              />
            </div>
            <div className="col-12 text-center mt-4">
              <button type="submit" className="btn btn-primary">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
