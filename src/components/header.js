const Header = () => {
  return (
    <div>
      <h1>Header</h1>
      <form className="search">
        <input type="text" placeholder="Search..." />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Header;
