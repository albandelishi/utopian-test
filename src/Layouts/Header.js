import { useState } from "react";
import List from "../components/List";
import Logo from "../components/Logo";
import logo from "../assets/img/Logo.svg";

function Header() {
  const linkList = [
    <List
      key="elOne"
      menuLabel=""
      className="nav-item"
      text=""
      linkClassName="nav-link"
      linkoOnClick=""
      linkLabel="About"
    />,
    <List
      key="elTwo"
      menuLabel=""
      className="nav-item"
      text=""
      linkClassName="nav-link"
      linkoOnClick=""
      linkLabel="Services"
    />,
    <List
      key="elThree"
      menuLabel=""
      className="nav-item"
      text=""
      linkClassName="nav-link"
      linkoOnClick=""
      linkLabel="Portfolio"
    />,
    <List
      key="elFour"
      menuLabel=""
      className="nav-item"
      text=""
      linkClassName="nav-link"
      linkoOnClick=""
      linkLabel="Team"
    />,
    <List
      key="elFive"
      menuLabel=""
      className="nav-item"
      text=""
      linkClassName="nav-link"
      linkoOnClick=""
      linkLabel="Contact"
    />,
  ];

  const linkElement = linkList.map((list) => {
    return list;
  });

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light top-line">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <Logo source={logo} alt="Logo" height={30} width={60} />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">{linkElement}</ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
