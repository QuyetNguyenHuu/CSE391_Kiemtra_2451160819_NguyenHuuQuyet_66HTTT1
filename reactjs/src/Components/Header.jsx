function Header({ title, subtitle }) {
  return (
    <header className="app-header">
      <div className="container">
        <h1 className="app-header__title">{title}</h1>
        <p className="app-header__subtitle">{subtitle}</p>
      </div>
    </header>
  );
}

export default Header;
