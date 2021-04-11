export const Header = () => {
  return (
    <header className="flex justify-between h-16 px-40 bg-white shadow-md">
      <div className="App-header-logo">
        <h2>Zuck</h2>
      </div>
      <div>
        <label>Search</label>
        <input />
      </div>
      <div>
        <button className="button-primary-dark">Cart</button>
        <button className="button-primary-dark">Bookmark</button>
      </div>
    </header>
  );
};
