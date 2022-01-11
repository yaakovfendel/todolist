import "./Footer.css";


function Footer({todos,Urgent_tasks,tasks_to_do,tasks_done}) {

    return (

        <div className="footer">
        <div>
            Total Tasks:{todos.length}
        </div>
        <div>
        <button
            className="btn btnfooter"
            style={{
              background: "lightgray",
              corsor: "pointer",
              border: "3px solid black",
            }}
            onClick={() => Urgent_tasks()}
          >
           Urgent tasks  
          </button>
        <button
            className="btn btnfooter"
            style={{
              background: "lightgray",
              corsor: "pointer",
              border: "3px solid black",
            }}
            onClick={() => tasks_to_do()}
          >
           tasks to do  
          </button>
        <button
            className="btn btnfooter"
            style={{
              background: "lightgray",
              corsor: "pointer",
              border: "3px solid black",
            }}
            onClick={() => tasks_done()}
          >
           tasks done  
          </button>
        </div>
        </div>
    )
}

export default Footer
