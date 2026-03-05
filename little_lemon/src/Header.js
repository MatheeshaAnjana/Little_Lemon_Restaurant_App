import logo from "./logo.jpg";
function Header() {
  return (
    <header>
      <img 
        src={logo} 
        alt="Little Lemon Logo"
        width="200"
      />
    </header>
  );
}

export default Header;