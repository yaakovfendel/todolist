import { useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Todos from "./components/Todos";
import Footer from "./components/Footer";

function App() {
  const [toDos, setToDos] = useState([
    {
      title: "Go shopping",
      time:
        new Date().getHours() +
        ":" +
        new Date().getMinutes() +
        ":" +
        new Date().getSeconds(),
      dade: "12/01/2022",
      status: false,
      category: "personal",
      star:true
    },
    {
      title: "wash the dishes",
      time:
        new Date().getHours() +
        ":" +
        new Date().getMinutes() +
        ":" +
        new Date().getSeconds(),
      dade: "13/02/2022",
      status: true,
      category: "work",
         star:true },
    {
      title: "Clean the vehicle",
      time:
        new Date().getHours() +
        ":" +
        new Date().getMinutes() +
        ":" +
        new Date().getSeconds(),
      dade: "01/04/2022",
      status: false,
      category: "Shopping",
          star:true},
    {
      title: "Perform assignments of the course",
      time:
        new Date().getHours() +
        ":" +
        new Date().getMinutes() +
        ":" +
        new Date().getSeconds(),
      dade: "17/07/2022",
      status: false,
      category: "wish list",
          star:true},
  ]);
  const [temptoDos, setTemptoDos] = useState(toDos);

  const Delete_a_task_from_the_list = (title) => {
    setToDos(toDos.filter((todo) => todo.title !== title));
    setTemptoDos(temptoDos.filter((todo) => todo.title !== title));
  };
  const Add_a_task_to_the_list = (
    AddToDoTitle,
    AddToDoDate,
    AddToDoTime,
    AddToDoCategory
  ) => {
    setToDos([
      ...toDos,
      {
        title: AddToDoTitle,
        time: AddToDoTime,
        dade: AddToDoDate,
        category: AddToDoCategory,
        status: false,
      },
    ]);
    setTemptoDos([
      ...temptoDos,
      {
        title: AddToDoTitle,
        time: AddToDoTime,
        dade: AddToDoDate,
        category: AddToDoCategory,
        status: false,
      },
    ]);
    setToDefult();
  };
  const setToDefult = () => {
    setAddToDoTitle("");
    setAddToDoTime("");
    setAddToDoDate("");
    setAddToDoCategory("");
  };
  const edit_task = (title) => {
    toDos.find((v) =>
      v.title === title
        ? ((v.title = AddToDoTitle),
          (v.time = AddToDoTime),
          (v.dade = AddToDoDate),
          (v.category = AddToDoCategory))
        : ""
    );
    setToDos([...toDos]);
    temptoDos.find((v) =>
      v.title === title
        ? ((v.title = AddToDoTitle),
          (v.time = AddToDoTime),
          (v.dade = AddToDoDate),
          (v.category = AddToDoCategory))
        : ""
    );
    setTemptoDos([...temptoDos]);
    setToDefult();
  };
  const update_list_by_filter = (category) => {
    setTemptoDos(
      category !== "all categories"
        ? toDos.filter((v) => v.category === category)
        : toDos
    );
  };
  const find_a_task = (AddToDoTitle) => {
    setTemptoDos(toDos.filter((v) => v.title.includes(AddToDoTitle)));
    setToDefult();
  };
const chage_star = (title) => {
    temptoDos.map((v) =>
      v.title === title
        ? v.star
          ? (v.star = false)
          : (v.star = true)
        : (v.star = v.star)
    );
    setTemptoDos([...temptoDos]);
    toDos.map((v) => v.title === title && v.star === v.star);
    setToDos([...toDos]);
}
const Urgent_tasks=()=>{
    setTemptoDos(toDos.filter((task)=>task.star===true));

}
const tasks_to_do=()=>{
    setTemptoDos(toDos.filter((task)=>task.status===false));

}
const tasks_done=()=>{
    setTemptoDos(toDos.filter((task)=>task.status===true));
}
  const [AddToDoTitle, setAddToDoTitle] = useState("");
  const [AddToDoTime, setAddToDoTime] = useState("");
  const [AddToDoDate, setAddToDoDate] = useState("");
  const [AddToDoCategory, setAddToDoCategory] = useState("");
  const chage_status = (title) => {
    temptoDos.map((v) =>
      v.title === title
        ? v.status
          ? (v.status = false)
          : (v.status = true)
        : (v.status = v.status)
    );
    setTemptoDos([...temptoDos]);
    toDos.map((v) => v.title === title && v.status === v.status);
    setToDos([...toDos]);
  };
  const categories = [
    "all categories",
    "wish list",
    "Shopping",
    "personal",
    "work",
  ];

 
  return (
    <div className="App container">
      <Header
        find_a_task={() => find_a_task(AddToDoTitle)}
        categories={categories}
        update_list_by_filter={update_list_by_filter}
      />

      <AddTask
        AddToDoTime={AddToDoTime}
        AddToDoDate={AddToDoDate}
        categories={categories}
        AddToDoCategory={AddToDoCategory}
        AddToDoTitle={AddToDoTitle}
        setAddToDoTitle={setAddToDoTitle}
        setAddToDoTime={setAddToDoTime}
        setAddToDoDate={setAddToDoDate}
        setAddToDoCategory={setAddToDoCategory}
        temptoDos={temptoDos}
      />
      <button
        className="btn"
        // style={{ background: "green", color: "yellow" }}
        onClick={() =>
          Add_a_task_to_the_list(
            AddToDoTitle,
            AddToDoDate,
            AddToDoTime,
            AddToDoCategory
          )
        }
      >
        add to list
      </button>

      <button
        className="btn"
        // style={{ background: "yellow", color: "brown" }}
        onClick={() => setTemptoDos(toDos)}
      >
        all tasks
      </button>
      <Todos
        todos={temptoDos}
        Delete_a_task_from_the_list={Delete_a_task_from_the_list}
        chage_status={chage_status}
        edit_task={edit_task}
        chage_star={chage_star}
      />
      <Footer todos={temptoDos}
      Urgent_tasks={Urgent_tasks}
      tasks_to_do={tasks_to_do}
tasks_done={tasks_done}      />
    </div>
  );
}

export default App;
