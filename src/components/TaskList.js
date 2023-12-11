import Task from "./Task";

function TaskList({ tasks, handleDelete }) {
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task handleDelete={handleDelete} key={task.text} text={task.text} category={task.category} />
      ))}
    </div>
  );
}

export default TaskList;