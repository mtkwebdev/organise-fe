import React, {useState, useRef} from 'react'
// import TaskCard from '../Cards/TaskCard'
// import TaskColumns from './TaskColumns'
// import './TasksDisplay.scss'
import './kambanStyles.scss'
// import {Card} from 'react-bootstrap'

function Kamban() {

const defaultState = [    
    {
        titles: 'Column 1',
        tasks: [
            'This is a task 1,1',
            'This is a task 2,1',
        ]
    },
    {
        titles: 'Column 2',
        tasks: [
            'This is a task 1,2',
            'This is a task 2,2',
            'This is a task 2,3',
            'This is a task 2,4',
            'This is a task 2,5',
            'This is a task 2,6',
            'This is a task 2,7',
            'This is a task 2,8',
            'This is a task 2,9',
        ]
    },
    {
        titles: 'Column 3',
        tasks: [
           'This is a task 3,1',
           'This is a task 3,2',
           'This is a task 3,3',
        ]
    },
    {
        titles: 'Column 4',
        tasks: []
    },
]

const stateTemplate = {
    titles: '',
    tasks: [
       'This is a task',
    ]
}

const [content, setContent] = useState(defaultState) 

const newTask = useRef()

function addNewColumn(addTitle){
    setContent({
        titles: addTitle,
        tasks: []})
}
// function addNewTask(e, parentColumn){
function addNewTask(){
    // console.log(parentColumn.concat({task:[e.target.value]}))
    console.log('hello')
}

    if (content) {
        return (
            <div className="dndContainer">
                <div className="dndGroups">
                    {content.map((column)=>(
                    <div key={column.titles.length +1} className="columns">
                        <div className="column">
                        {column.titles}
                            <div className="addTask" onCLick={addNewTask}>Add Task</div> 
                            {/* <input name='task' placeholder="Type New Task Here!" type="text"  onBlur={(e)=>{addNewTask(e,column.tasks)}}/> */}
                            <input name='task' placeholder="Type New Task Here!" type="text" ref={newTask} />
                                {column.tasks.map((task)=>(
                            <div key={column.tasks.length} draggable onClick={()=>{console.log(column.titles, task)}} className="dndItems">
                                    {task}
                                    <span>edit</span>
                            </div>
                                ))}
                        </div>
                    </div>
                    ))}
                </div>
                <div className="addColumns" onClick={addNewColumn}>Add a group</div>
            </div>
        )
    }
    else {
        return (
            <div className="dndContainer">
            <div className="addColumns" >Add a group</div>
            </div>
        )
    }
        
}

export default Kamban
