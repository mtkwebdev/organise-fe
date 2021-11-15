
import React, {useState, useRef} from 'react'
import './kambanStyles.scss'

function Kamban() {

    const mockKanbanData = [    
        {
                titles: 'Column 1',
                tasks: [
                    'This is a task',
                    'This is a wef;kwefwefkwe;fk',
                ]
            },
            {
                titles: 'Column 2',
                tasks: [
                    'This is a task',
                    'This is a task',
                    'This is a task',
                    'This is a task',
                    'This is a task',
                    'This is a task',
                    'This is a task',
                    'This is a task',
                    'This is a task',
                    'This is a task',
                    'This is a task',
                    'This is a task',
                    'This is a task',
                    'This is a task',
                    'This is a task',
                    'This is a task',
                    'This is a task',
                    'This is a task',
                    'This is a task',
                    'This is a task',
                    'This is a task',
                    'This is a task',
                    'This is a task',
                    'This is a task',
                    'This is a task',
                    'This is a task',
                    'This is a task',
                ]
            },
            {
                titles: 'Column 3',
                tasks: [
                   'This is a task',
                   'This is a task',
                   'This is a task',
                ]
            },
            {
                titles: 'Column 4',
                tasks: []
            },
        ]

const [content, setContent] = useState(mockKanbanData)
const [taskClick, setTaskClick] = useState(false)

const taskRef = useRef(null)
// useState([
//     {   titles: '',
//         tasks: ['']}
// ]) 

// useEffect(() => {
//     setContent(data)
// }, [content])

function addCol(){
    if (content.length < 0) {
        setContent({titles: 'Column', tasks: ['']})
    } else {
    setContent(content.concat({titles: 'Column', tasks: []}))}
    console.log(content)
}

function logPointer(column, task, content){
    console.log("Column: "+column, "Task: "+task, "content: "+ content)
}
// logPointer(column, columnIndex+1, column.titles)}

function titles(e, i){
    console.log(...content, content[i].titles = e.target.value)
}

function saveTasks(e, i, ii){
    console.log(...content, content[i].tasks[ii] = e.target.value)
}

function  addNewTask(){
    // let newTask = Object.assign({}, {
    //     titles: '',
    //     tasks: [''],
    // })
    console.log(...content, [content.tasks].concat('newTask'))
}

function editTask( e, column, taskIndex, task){
    taskRef.addEventListener('click', ()=>{
        if (e.target.matches === column + taskIndex){
        return (taskClick ? {task} : <input key={Math.random()} type="text" placeholder={task}/>)}
        console.log(e.target.matches === column + taskIndex)
    })
}

function logRef(){
    console.log(taskRef)
}

if (content.length > 1 ){
        return (
            <div className="dndContainer">
                <div className="dndGroups">
                    { content.map((column, columnIndex)=>(
                        <div key={(columnIndex+1, column.titles, Math.random()) } draggable  className="columns">
                            <div className="column">
                                <input className="addColumnTitle" type="text" onBlur={(e)=>{titles(e, columnIndex)}} />
                                <div className="addTask" onClick={()=>{addNewTask()}}>Add Task</div>                        
                                    {column.tasks.map((task, taskIndex)=>(
                                        <div>
                                            {/* <span><input key={(columnIndex+1, task+1, Math.random())} name='task' placeholder={task} onBlur={(e)=>{saveTasks(e, columnIndex, taskIndex)}} type="text" className="dndItems" /></span><span className="editBtn">...</span> */}
                                            <div key={(columnIndex+1, task+1, Math.random())} draggable onDoubleClick={()=>{setTaskClick(!taskClick)}} className="dndItems" ref={taskRef}>    
                                                {/* {task} */}
                                                {(column + taskIndex && taskClick) ? <div key={Math.random}>{task}</div> : <input key={Math.random()} type="text" placeholder={task}/>}
                                                {/* {(e)=>{editTask(e,columnIndex, taskIndex, task) */}
                                            </div>
                                        </div>
                                    ))}
                                    
                            </div>
                        </div>
                     ))}
                </div>
                <div className="addColumns" onClick={()=>{addCol()}}> + Add a group of Tasks</div>
                {/* need to use Redux to set out template data, useDispatch to add new tasks to state, useSelector to display data */}
            </div>
        )
    }
    else {
        return (
            <div className="dndContainer">
            <div className="addColumns" onClick={()=>{addCol()}}> + Add a group of Tasks</div>
            </div>
        )
    }
        
}

export default Kamban
