import "./Header.css";

function Header({ find_a_task, categories, update_list_by_filter }) {
  return (
    <div className="header">
      <h1>TODO LIST</h1>
      <button
        className="btn"
        style={{ background: "lightblue" }}
        onClick={() => find_a_task()}
      >
        🔍
      </button>
      <div className="Header-sort">
        <div className="Header-sort">
          <label>Filter by:</label>
          <select
            onChange={(e) => {
              update_list_by_filter(e.target.value);
            }}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default Header;
