import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { toast,ToastContainer } from 'react-toastify'

function AddTask({tasks, setTasks}) {
  const [task, setTask] = useState({
    id: '',
    name: '',
    status: 'todo',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if(task.name.length <=3 ){
      alert("Task length should me more than 3 characters")
      // toast.error("Task length should be more than 5 characters!",{
      //   position:toast.POSITION.TOP_CENTER,
      //   autoClose:3000

      // })
      return ;
    }

    setTasks((prev)=>{
      const list = [...prev, task]
      localStorage.setItem("task", JSON.stringify(list))

      return list
    })

    setTask({
      id: '',
    name: '',
    status: 'todo',
    })
  };

  return (
    <div className='flex justify-center'>
      <form onSubmit={handleSubmit}>
        <input type='text' className='rounded-md p-3 bg-slate-200' 
        placeholder='Add Your Tasks' 
        onChange={(e)=> setTask({...task, id:uuidv4(),name:e.target.value})}
        value={task.name} />
        <select className="bg-blue-500 p-3 rounded-md text-white" value={task.status} onChange={(e) => setTask({...task, status: e.target.value})}>
          <option className="p-3" value="todo">Todo</option>
          <option className="p-3" value="inprogress">In Progress</option>
          <option className="p-3" value="closed">Closed</option>
        </select>
        <button className="mx-3 bg-green-300 hover:bg-green-400 p-3 rounded-md">ADD</button>
        
      </form>
      <ToastContainer/>
    </div>
  );
}

export default AddTask;
