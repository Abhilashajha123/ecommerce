import React from "react";

const Login = () => {
  return (
    <div>
      <button
        type="button"
        className="btn btn-outline-info col-xs-2"
        data-bs-toggle="modal"
        data-bs-target="#exampleloginModal"
      >
        Login In
      </button>
      <div
        className="modal fade"
        id="exampleloginModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Login
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
