import style from "./Header.module.css";
const Header = () => {
  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <h1>Color Picker</h1>
      </nav>
    </header>
  );
};

export default Header;
