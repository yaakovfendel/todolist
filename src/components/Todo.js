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
              ? `๐ญ`
              : category === "Shopping"
              ? "๐"
              : category === "wish list"
              ? "๐"
              : category === "personal"
              ? "๐จโ๐ฉโ๐งโ๐ง"
              : "๐"}
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
            {star ? `โญ`:"โฉ"} 
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
            ๐๏ธ
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
            ๐๏ธ
          </button>
          
          </div>
    </div>
  );
};

export default Todo;
