function SearchBar({ value, onChange }) {
  return (
    <div className="search-row">
      <label htmlFor="search" className="visually-hidden">Search projects</label>
      <input
        type="search"
        id="search"
        placeholder="Search projects by name, tag, or description…"
        autoComplete="off"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
