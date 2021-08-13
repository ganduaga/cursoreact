const Task = (props) =>{
return(
  <div className={`task ${props.reminder?'reminder':''}`} onDoubleClick={() => props.onToggle(props.id) }>
    <h3>{props.text}  <button className='delete'  onClick={() => props.onDelete(props.id)}>X
    </button></h3>
    <p>{props.day}</p>
  </div>
)
}
export default Task
