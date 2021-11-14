
import React, {useState, useEffect} from 'react'
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
// useState([
//     {   titles: '',
//         tasks: ['']}
// ]) 

// useEffect(() => {
//     console.log(content)
// }, [content])

function addCol(){
    if (content.length < 0) {
        setContent({titles: 'Column', tasks: ['']})
    } else {
    setContent(content.concat({titles: 'Column', tasks: ['']}))}
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

if (content.length > 0){
        return (
            <div className="dndContainer">
                <div className="dndGroups">
                    {content.length > 0 ? content.map((column, columnIndex)=>(
        <div key={(columnIndex+1, column.titles, Math.random()) } draggable  className="columns">
            <div className="column">
                <input className="addColumnTitle" type="text" onBlur={(e)=>{titles(e, columnIndex)}} />
                <div className="addTask" onClick={()=>{addNewTask()}}>Add Task</div>                        
                    {column.tasks.map((task, taskIndex)=>(
                <input key={(columnIndex+1, task+1, Math.random())} name='task' placeholder={task} onBlur={(e)=>{saveTasks(e, columnIndex, taskIndex)}} type="text"  />
                    ))}
            </div>
        </div>
        )):null}
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
