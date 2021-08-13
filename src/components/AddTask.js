import Task from './Task'
import {useState} from 'react'

const AddTasks = (props) =>{
    const [text, setText]=useState("")
    const [day, setDay]=useState("")
    const [reminder, setReminder]=useState("")
    const onSubmit=(e) =>{
        e.preventDefault()
        if (!text){
            alert("Recordatorio debe tener un nombre")
            return
        }
        props.onAdd({text, day, reminder})
        setText("")
        setDay("")
        setReminder(false)
    }

  return(
  <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
          <label> Recoratorio </label>
          <input type="text" placeholder="Nombre del recordatorio" value={text} onChange={(e)=> setText(e.target.value)}></input>
      </div>
      <div className="form-control">
      <label> Fecha </label>
          <input type="text" placeholder="Hora y fecha" value={day} onChange={(e)=> setDay(e.target.value)}></input>
      </div>
      <div className="form-control">
      <label> recodarme? </label>
          <input type="checkbox" value={reminder} onChange={(e)=> setReminder(e.currentTarget.checked)}></input>
      </div>
      <input className="btn btn-block" type="submit" value="Agregar"></input>
  </form>
  )
  }
export default AddTasks
