import Task from './Task'
const Tasks = (props) =>{
  return(
  <div>
  {props.tasks.map((task) => (<Task key={task.id} text={task.text} day={task.day} onDelete={props.onDelete} id={task.id} onToggle={props.onToggle} reminder={task.reminder}/>))}
  </div>
  )
  }
export default Tasks
