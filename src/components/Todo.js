import "./Todo.css";

const Todo = ({
  title,
  status,star,
  Delete_a_task_from_the_list,
  chage_status,
  edit_task,chage_star,
  time,
  date,
  category,todos
}) => {
  return (
    <div >
      <div  
        className={status ? "task" : "task reminder"}
        onDoubleClick={() => chage_status(title)}
        style={
          status
            ? { background: "gray", textDecoration: "line-through", "borderLeft": "5px solid green" }
            : { textDecoration: " " }
        }
      >
      <div>
      <div className="text">
            <h2>task:</h2>{title}
            <h2>category:</h2> {category}
<h2>date:</h2> {date} 
<h2>time:</h2> {time}
          </div>
            
        <div className="emoji"  >
            {category === "work"
              ? `🏭`
              : category === "Shopping"
              ? "🛍"
              : category === "wish list"
              ? "🙏"
              : category === "personal"
              ? "👨‍👩‍👧‍👧"
              : "🎗"}
          </div>          

<div/>
        </div>
      </div>
<div className="task" >
       <button
            className="btn "
            style={{
              background: "lightgray",
              corsor: "pointer",
              border: "3px solid black",
            }}
            onClick={() => chage_star(title)}
          >
            {star ? `⭐`:"✩"} 
          </button>
          <button
            className="btn"
            style={{
              background: "lightgray",
              corsor: "pointer",
              border: "3px solid black",
            }}
            onClick={() => Delete_a_task_from_the_list(title)}
          >
            🗑️
          </button>
          <button
            className="btn"
            style={{
              background: "lightgray",
              corsor: "pointer",
              border: "3px solid black",
            }}
            onClick={() => edit_task(title)}
          >
            🖊️
          </button>
          
          </div>
    </div>
  );
};

export default Todo;
