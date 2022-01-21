import React, {useState, useEffect, useRef} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import TaskCard from '../Cards/TaskCard'
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'
import {addTasks} from '../../../features/kambanSlice.js'

function TaskColumns({titles, columnID, tasks, columnMappedIndex}) {
    
    const dispatch = useDispatch()
    
    function newTasks(boardIndex, value){
        if (value === '' || (undefined || null)){ return } else {dispatch(addTasks({index: boardIndex, task: value}))}
        console.log(`index: ${boardIndex}, task: ${value}`)
    }

    return (
            <div className='dndColumns' >
                <div className="column" key={columnID} >
                    <input className="listTitle" type="text" placeholder="Click here to add a Title!" />
                    <div className="addTasks">
                        <input 
                        className="newTask" type="text" 
                        placeholder="Add a New Task?"
                        // onBlur={(e)=>{newTasks(columnMappedIndex, e.target.value)}}
                        onKeyUp={(e)=>{ return (e.key === "Enter") ? newTasks(columnMappedIndex, e.target.value) : null}}
                        />
                        <span>+</span>
                    </div>
                    <TaskCard idColumn={columnID} taskData={tasks} mappedColumns={columnMappedIndex}/>
                </div>  
            </div>
    )
}

export default TaskColumns
