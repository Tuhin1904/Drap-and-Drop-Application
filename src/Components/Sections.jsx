import React ,{useEffect}from 'react';
import Header from './Header';
import Todos from './Todos';
import { useDrop } from 'react-dnd';
import "./Sections.css"

function Sections({status, tasks, setTasks, todos, inProgress,closed}) {
    const [{isOver}, drop] = useDrop(() => ({
        accept: "task",
        drop: (item) => addItemToSection(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    // const [taskToMap, setTaskToMap] = useState(todos);
    let taskToMap=todos
    let text = "Todo";
    let bg = "bg-red-400";

    // useEffect(() => {
        if(status === 'inprogress'){
            text = "In Progress";
            bg = "bg-green-400";
            taskToMap=inProgress;
        }
        if(status === 'closed'){
            text = "Closed";
            bg = "bg-purple-400";
            taskToMap= closed;
        }
        if(status==="todos"){
            text="Todos";
            taskToMap=todos
        }
        // else{
        //     taskToMap=todos;
        // }
    // }, [status, todos, inProgress, closed]);

    const addItemToSection = (id) => {
        console.log("dropped the task ", id);

        setTasks((prev) => {
            console.log("prev", prev);
            const modifiedTasks = prev.map((eachTask) => {
                if(eachTask.id === id){
                    return {...eachTask, status: status};
                }
                return eachTask;
            });
            localStorage.setItem("task", JSON.stringify(modifiedTasks));
            alert("task status");
            return modifiedTasks;
        });
    };

    return (
        <div ref={drop} className={`todoContainer ${isOver ? "bg-slate-800" : "bg-slate-400"}`} >
            <Header text={text} bg={bg} count={taskToMap.length} />
            {taskToMap.length>0 && taskToMap.map((task) => (
                <Todos key={task.id} task={task} tasks={tasks} setTasks={setTasks} />
            ))}
        </div>
    );
}

export default Sections;
