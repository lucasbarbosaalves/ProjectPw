import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Kalender</h1>
      <div className="header__links">
        <a href="/" className="header__link">Home</a>
        <a href="/calendario" className="header__link">Calendario</a>
        <a href="/login" className="header__link">Login</a>
      </div>
    </header>
  );
};

export default Header;
