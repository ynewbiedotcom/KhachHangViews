import { useContext } from "react";
import { AppContext } from "./AppContext";

const NavBar = () => {
  const userData = useContext(AppContext);

  return (
    <div>
      <nav className="nav justify-content-center">
        <a className="nav-link active" href="#s">
          Active link
        </a>
        <button onClick={userData.changeTheme}>light/dark</button>
        <a className="nav-link disabled" href="#">
          Disabled link
        </a>
      </nav>
    </div>
  );
};
export default NavBar;
