import Todo from "./Todo";

const Todos = ({
  todos,
  Delete_a_task_from_the_list,
  chage_status,
  edit_task,chage_star
}) => {
  return (
    <section className="Todos-todos">
      {todos.map((todo, index) => (
        <Todo
          key={index}
          title={todo.title}
          status={todo.status}
          star={todo.star}
          Delete_a_task_from_the_list={Delete_a_task_from_the_list}
          chage_status={chage_status}
          edit_task={edit_task}
          time={todo.time}
          date={todo.dade}
          category={todo.category}
         todos={todos} 
         chage_star={chage_star}
        />
      ))}
    </section>
  );
};

export default Todos;
