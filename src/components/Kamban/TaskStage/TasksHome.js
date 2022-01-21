import React, {useState} from 'react'
import TaskColumns from './TaskColumns'
import './TasksDisplay.scss'


function TasksHome() {

    const [numberOfCols, setNumberOfCols] = useState([])
    

    const addNewCol = () => {
        setNumberOfCols(numberOfCols.concat(<TaskColumns key={numberOfCols.length}/>))
        console.log("Columns:",numberOfCols.length + 1)
        console.log(numberOfCols)
        // consider using unshift instead of concact? 
    }

    return (
        <div className="tasksContainer">
        {numberOfCols}
            <button className="addAnotherCol" onClick={addNewCol}>+ Add a Task List</button>
        </div>
    )
}

export default TasksHome
