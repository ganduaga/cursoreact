import Task from './Task'

const Tasks = (props) =>{
return(
  <div>
  {props.tasks.map((task) => (<h3 key={task.id}>{task.text}</h3>))}

  {props.tasks.map((task) => (<Task key={task.id} text={task.text} day={task.day} />))}

  </div>
)
}
export default Tasks
