import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function NavBar() {
  const { session, setSession } = useContext(AuthContext);
  const navigate = useNavigate();

  function logout() {
    setSession(null);
    localStorage.removeItem("session");
    navigate("/");
  }
  return (
    <>
      <nav>
        <h1>
          {" "}
          <Link to="/" className="navbarListItem">
            SmartDelivery
          </Link>
        </h1>

        <div>
          {session ? (
            <div className="navbarListItems">
              <Link to="/" className="navbarListItem">
                <img
                  className="nav-icon"
                  src="https://www.atvrom.ro/frontend/atvrom/images/test-drive.webp"
                />
                Home
              </Link>
              <Link to="/scooters" className="navbarListItem">
                <img
                  className="nav-icon"
                  src="https://www.atvrom.ro/storage/categories/24/Icon-zehoo-2_O7Gma_1703161922.webp"
                />{" "}
                Scooters
              </Link>
              <Link to="/cars" className="navbarListItem">
                <img
                  className="nav-icon"
                  src="https://www.atvrom.ro/storage/categories/98/sxs_6anBL_1661196558.webp"
                />
                Cars
              </Link>
              <div className="navbarListItem">
                {" "}
                <img
                  className="nav-icn"
                  src="https://www.atvrom.ro/frontend/atvrom/images/login.webp"
                  title={session.user.email}
                />
                <button className="logout-btn" onClick={logout}>
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div className="navbarListItems">
              <div className="navbarListItems">
                {" "}
                <Link to="/" className="navbarListItem">
                  <img
                    className="nav-icon"
                    src="https://www.atvrom.ro/frontend/atvrom/images/test-drive.webp"
                  />
                  Home
                </Link>
                <Link to="/sign-in" className="navbarListItem">
                  <img
                    className="nav-icon"
                    src="https://www.atvrom.ro/storage/categories/24/Icon-zehoo-2_O7Gma_1703161922.webp"
                  />{" "}
                  Scooters
                </Link>
                <Link to="/sign-in" className="navbarListItem">
                  <img
                    className="nav-icon"
                    src="https://www.atvrom.ro/storage/categories/98/sxs_6anBL_1661196558.webp"
                  />
                  Cars
                </Link>
              </div>
              <Link to="/sign-in" className="login-btn">
                Login
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
