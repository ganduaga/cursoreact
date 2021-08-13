//import logo from './logo.svg';
//import './App.css';
import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTasks from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask]=useState(false)

const [tasks, setTasks] = useState([
{
  id:1,
  text:'Cita con el Doctor',
  day: '25 de Agosto 2021',
  reminder: true
},
{
  id:2,
  text:'Videoconferencia ITA',
  day: '3 de Septiembre 2021',
  reminder: true
},
{
  id:3,
  text:'Entrega de Avance de Proyecto',
  day: '15 de Agosto 2021',
  reminder: false
  }
])

const deleteTask = (id) =>{
  //console.log("delete",id);
  setTasks(tasks.filter((task)=> task.id != id))
}

const toggleReminder = (id) =>{
  //console.log("reminder",id);
  setTasks(tasks.map((task)=>task.id==id?{...task, reminder:!task.reminder}:task))
}

const addTask=(task)=>{
  const id=Math.floor(Math.random()*10000)+1
  const newTask={id, ...task}
  setTasks([...tasks, newTask])
}


const x = true

  return (
    <div>
    <Header title='Recordatorios' onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
    {showAddTask && <AddTasks onAdd={addTask}/>}
    <Tasks tasks={tasks} onDelete={deleteTask} 
      onToggle={toggleReminder}/>

    </div>
  );
}

export default App;
