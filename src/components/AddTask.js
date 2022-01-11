export default function AddTask({
  AddToDoTitle,
  AddToDoTime,
  AddToDoDate,
  categories,
  AddToDoCategory,
  setAddToDoTitle,
  setAddToDoTime,
  setAddToDoDate,
  setAddToDoCategory,temptoDos
}) {
  return (
    <div>
      <div>
        <h3> Task</h3>
      </div>
      <input
        className="form-control"
        type="text"
        value={AddToDoTitle}
        onChange={(e) => setAddToDoTitle(e.target.value)}
        placeholder="add task to do"
      />
      <div>
        <h3> Time</h3>
      </div>
      <input
        className="form-control"
        type="time"
        value={AddToDoTime}
        onChange={(e) => setAddToDoTime(e.target.value)}
      />
      <div>
        <h3> Date</h3>
      </div>
      <input
        className="form-control"
        type="date"
        value={AddToDoDate}
        onChange={(e) => setAddToDoDate(e.target.value)}
      />
      <div>
        <h3>Category</h3>
        <div>
          <div>
            <select
              className="form-control"
              onChange={(e) => {
                setAddToDoCategory(e.target.value);
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
    </div>
  );
}
