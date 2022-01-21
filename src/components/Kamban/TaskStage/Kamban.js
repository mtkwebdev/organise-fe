import React, {useState, useEffect, useRef} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd"
import TaskCard from '../Cards/TaskCard'
import './kambanStyles.scss'

import TaskColumns from './TaskColumns'

// Redux Actions
import {addColumn, addTasks, dragActions} from '../../../features/kambanSlice.js'

function Kamban({props}) {
    const dispatch = useDispatch()
    const boardData = useSelector(state => {return state.kambanSlice.kambanBoard})
    const [savedState, setsavedState] = useState(boardData)

    useEffect(() => {
        setsavedState(boardData)
    }, [boardData])


    return (
      
            <div className="dndContainer">
                {savedState.slice(0).sort((a, b) => (a.columnStateIndex > b.columnStateIndex) ? 1 : -1).map(({titles, columnStateIndex, columnID, tasks}, columnMappedIndex)=>{
                    return (
                        <TaskColumns 
                        key={columnID} 
                        titles={titles} 
                        columnStateIndex={columnStateIndex} 
                        columnMappedIndex={columnMappedIndex} 
                        tasks={tasks}
                        />
                    )
                })}
                <div className="addColumns" onClick={()=>{dispatch(addColumn('Untitled Column'))}}> + Add a List</div>
            </div>
 
    )
}

export default Kamban
