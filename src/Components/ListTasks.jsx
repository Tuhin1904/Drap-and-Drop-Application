
import { useState,useEffect } from 'react';
import Sections from './Sections';
import "./ListTasks.css"

const ListTasks = ({tasks, setTasks})=>{
    const[todos, setTodos]=useState([])
    const[inProgress,setInProgress]=useState([])
    const[closed, setClosed]=useState([])

    useEffect(() => {
        if (tasks) {
        const fTodos = tasks.filter((task)=> task.status === "todos")
        const fInProgress = tasks.filter((task)=> task.status === "inprogress")
        const fClosed = tasks.filter((task)=> task.status === "closed")

        setTodos(fTodos)
        setInProgress(fInProgress)
        setClosed(fClosed)
        }
    }, [tasks])

    const statuses = ['todos','inprogress','closed']

    return(
        <>
            <div className="flex gap-28 justify-center mt-10 taskListContainer">
                {statuses.map((status,i)=>(
                    <Sections key={i} status={status} tasks={tasks} setTasks={setTasks} todos={todos}  inProgress={inProgress} closed={closed} className="sectionsCls"/>
                ))}
            </div>

        </>
    )
}
export default ListTasks;