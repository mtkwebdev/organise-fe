import React, {useState} from 'react'
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
            'This is a task',
            'This is a task',
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
]

const [content, setContent] = useState(defaultState) 



    if (content) {
        return (
            <div className="dndContainer">
                <div className="dndGroups">
                    {content.map((column)=>(
                    <div key={column.titles.length} className="columns">
                        <div className="column">
                        {column.titles}
                                {column.tasks.map((task)=>(
                            <div className="dndItems">
                                    {task}
                            </div>
                                ))}
                            <div className="addTask">Add Task</div> 
                        </div>
                    </div>
                    ))}
                </div>
                <div className="addColumns" >Add a group</div>
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
