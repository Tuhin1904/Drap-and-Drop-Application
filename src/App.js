import './App.css';
import Practice from './Common/Practice';
import AddTask from './Components/AddTask';
import { useState,useEffect } from 'react';
import ListTasks from './Components/ListTasks';
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [tasks, setTasks]=useState([]);
  console.log(tasks)
  useEffect(()=>{
    let setTaskVar= JSON.parse(localStorage.getItem('task'))??[]
    console.log(setTaskVar)
    setTasks(setTaskVar)
  },[])

  return (
    <DndProvider backend={HTML5Backend}>
    <div className='App'>
      <Practice />
      <AddTask tasks={tasks} setTasks={setTasks}/>
      <ListTasks tasks={tasks} setTasks={setTasks}/>
    </div>
    </DndProvider>
  );
}

export default App;
