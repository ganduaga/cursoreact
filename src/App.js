//import logo from './logo.svg';
//import './App.css';
import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
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

const nombre = 'Ricardo'
const x = true

  return (
    <div>
    <Header title='Recordatorios' />

    <Tasks tasks={tasks}/>

    </div>
  );
}

export default App;
