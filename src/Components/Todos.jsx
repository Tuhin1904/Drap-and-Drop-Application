import React from 'react'
// import {useDrag} from 'react-dnd-html5-backend'
// import {DragDropContext,Droppable} from "react-beautiful-dnd"
// import { useDrag } from 'react-dnd-html5-backend';
import { useDrag } from 'react-dnd';
import "./Todo.css"

function Todos({task, tasks, setTasks}) {
    const [{isDragging},drag]=useDrag(()=>({
        type:"task",
        item:{id:task.id},
        collect:(monitor)=>({
            isDragging:!!monitor.isDragging()
        })
    }))
    // console.log(isDragging)
    const handleRemove =(id)=>{
        const filterTask= tasks.filter(t => t.id !== id)
            localStorage.setItem("task",JSON.stringify(filterTask))
        setTasks(filterTask)
    }
  return (
  
    
    <div ref={drag}
    className={`bg-slate-300 my-2 px-5 rounded-md flex justify-between mx-auto cursor-grab ${isDragging ? "opacity-40 bg-white":"opacity-100"} todoList`}>
    <p>{task.name}</p>
    
    <button 
    onClick= {()=> handleRemove(task.id)}
    className="bg-red-600 text-white w-6 rounded-md opacity-70 hover:opacity-100"> X </button>

    
    </div>
   
  )
}

export default Todos