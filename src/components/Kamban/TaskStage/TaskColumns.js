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

    const endedDrag = () =>{}

    return (


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

                                        <DragDropContext onDragEnd={endedDrag}>
                                            <Droppable droppableId="droppable-1" type="PERSON">
                                                {(provided, snapshot) => (
                                                    <div
                                                    ref={provided.innerRef}
                                                    style={{ backgroundColor: snapshot.isDraggingOver ? 'lighgrey' : 'none' }}
                                                    {...provided.droppableProps}
                                                    >   
                                                    <div>

                                                        <TaskCard idColumn={columnID} taskData={tasks} mappedColumns={columnMappedIndex}/>
                                                    </div>
                                                        {provided.placeholder}
                                                    </div>
                                                )}
                                            </Droppable>
                                        </DragDropContext>
                                    </div>  
    )

}

export default TaskColumns
