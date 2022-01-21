import React, {useState, useEffect} from 'react'
// eslint-disable-next-line 
// import { useDispatch, useSelector} from 'react-redux'
// eslint-disable-next-line 
import { addCard } from '../../../features/kambanSlice'
// import {Card} from 'react-bootstrap'
import './TaskCards.scss'
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'

function TaskCard({taskData, mappedColumns}) {
    // const [taskIndex, setTaskIndex] = useState(taskData)

    // const handleDragEnd = (e, col,task)=>{
    //     console.log(`End Col: ${col} End task: ${task}`)
    //     if (e.target.clientHeight / 2 < e.target.clientHeight) return  console.log(e.target.clientHeight)
    //     if (e.target.clientHeight >= e.target.clientHeight / 2) return  console.log(e.target.clientHeight)
    //     // if (e.target.clientHeight) return console.log(e.clientHeight)
    
    // }

//   console.log(`( Old Index: ${currentTaskIndex}, Old Task Order: ${taskData[currentTaskIndex].task} ) | ( New Index: ${newIndex}  | New Task Order: ${taskData[newIndex].task} )`)



    return (
        <>
            {taskData.map((data, currentTaskIndex)=>{ 
                const newIndex = data.taskStateIndex
                return (
                    <Draggable draggableId="draggable-1" index={currentTaskIndex} key={currentTaskIndex}> 
                        {(provided, snapshot) => (
                            <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            key={currentTaskIndex}
                            >
                                <div className='dndTasks'   
                                    id={`${newIndex} ${currentTaskIndex}`} 
                                    key={`${data.taskID + data.task}`}
                                    onDragEnter={()=>{console.log(currentTaskIndex,)}}
                                >
                                        {taskData[newIndex].task}
                                </div>

                            </div>
                        )}
                    </Draggable>
                )
            })}
        </>
    )
}

export default TaskCard