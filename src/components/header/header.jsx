import { Link } from "react-router-dom";

// Linkedin correcto 
// https://www.linkedin.com/in/mariabegue/

function Header() {
  return (
    <header>
      <Link to={"https://www.linkedin.com/in/agust%C3%ADn-braco/"} target="blank"><img src="assets/icons/linkedin.png" alt="icon-linkedin" className="header-linkedin"/></Link>
      <Link to={"/"}><img src="assets/icons/logo.png" alt="logo-maria-begue" className="header-logo"/></Link>
      <img src="assets/icons/menu-mobile.png" alt="icon-menu-mobile" className="header-menu-mobile"/>
    </header>
  );
};

export default Header;