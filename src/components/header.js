const Header = () => {
  return (
    <div>
      <h1>Nice Weather Everyday</h1>
      <form className="search">
        <input type="text" placeholder="Enter a location..." />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Header;
