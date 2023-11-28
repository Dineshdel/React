import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import LoginContext from "../Context/LoginContext";
import UserContext from "../Context/UserContext";

function Login() {
  const userdata = useContext(UserContext);
  const logindata = useContext(LoginContext);

  const navigate = useNavigate();
  return (
    <section className="vh-100 mt-5 pt-3">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-10 col-lg-10 col-xl-6 mt-4 shadow-lg offset-xl-1">
            <form>
              <h2>Library Managment</h2>
              <div className="form-outline mb-3">
                <input
                  type="text"
                  id="form3Example3"
                  className="form-control mt-4 form-control-lg"
                  placeholder="Enter a username"
                  onChange={(event) => userdata.setUsername(event.target.value)}
                />
              </div>

              <div className="form-outline mb-3">
                <input
                  type="password"
                  id="form3Example4"
                  className="form-control form-control-lg"
                  placeholder="Enter password"
                />
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <div className="form-check mb-0">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="form2Example3"
                  />
                  <label className="form-check-label" For="form2Example3">
                    Remember me
                  </label>
                </div>
              </div>

              <div className="d-flex ms-3">
                <button
                  class="btn mx-2 my-4 btn-info  btn-sm mt-3"
                  onClick={() => {
                    logindata.setLibrarianVisible(true);
                    navigate("/portal/dashboard");
                  }}
                  type="button"
                  className="btn   mt-2"
                  style={{ paddingRight: "2.5rem" }}
                >
                  <p>Librarian Login</p>
                </button>
                <button
                  class="btn mx-2  my-4  btn-info  btn-sm mt-3"
                  onClick={() => {
                    logindata.setLibrarianVisible(false);
                    navigate("/portal/book");
                  }}
                  type="button"
                  className="btn   mt-2"
                  style={{ paddingRight: "2.5rem" }}
                >
                  <p>Reader Login</p>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
