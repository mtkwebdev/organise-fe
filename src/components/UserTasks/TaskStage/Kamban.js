import React, {useState, useEffect, useRef} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import './kambanStyles.scss'

// Redux Actions 
import {addColumn, addTasks, dragActions} from '../../../features/kambanSlice.js'


function Kamban() {
// Variables\\
    //// State and Redux related Variables 
    const dispatch = useDispatch()
    const boardData = useSelector(state => {return state.kambanSlice.kambanBoard})
    const stateTitles = useSelector(state => {return state.kambanSlice.kambanBoard.titles})
    const stateTasks = useSelector(state => {return state.kambanSlice.kambanBoard.tasks})

    //// mapping and updating Kamban board state
    const [boardState, setBoardState] = useState(boardData)
    const [drag, setDrag] = useState({
        start: 0,
        end: 0
    })
    const [value, setValue] = useState({
        title: '',
        task: ''
    })
//END Variables\\

// Run and Set Functions Below \\
    //// input values
    const columnValue = useRef(null)
    const taskValue = useRef(null)
    const innerTaskText = taskValue.value

    //// Use Effect Hook
    useEffect(() => {
        setBoardState(boardData)
    }, [boardData])

    //// Custom Logic and Functions 
    function newColumns(){
        dispatch(addColumn('new Column'))
        // {console.log(boardData)}
    }

    function newTasks(boardIndex, value){
        // dispatch(addTasks({index: boardIndex, task:'tings'}))
        if (value === '' || (undefined || null)){return } else {dispatch(addTasks({index: boardIndex, task: value}))}
        console.log(value)
    }

    function dragEvents(index1, index2, task1, task2){
        // window.addEventListener('dragend', (index1)=>{
        //     console.log(index1)
        // })
    }

    function logs(e){
        
    }
// END >>>> Functions \\

//Render and JSX\\
        return (
            <div className="dndContainer">
                <div className="dndGroups">
                    {boardState.map((board, boardIndex)=>{
/* Columns */
                        return (
                            
                            <div 
                            className="column" key={Math.random()} draggable 
                            // onDragStart={()=>{dragEvents(boardIndex)}}
                            // onDragStart={()=>{setDrag(drag.start, boardIndex)}}
                            // onDragEnd={()=>{setDrag(drag.end, boardIndex); console.log(drag)}}
                            // onDragStart={()=>{setDrag(drag.start = [boardIndex]); console.log("started " + drag.start)}}
                            // onDragEnter={()=>{setDrag(drag.end = [boardIndex]); console.log("ended " + drag.end)}}
                            >
                                <input className="listTitle" type="text" placeholder="Click here to add a Title!" />
                                <div className="addTasks">
                                    <input className="newTask" type="text" placeholder="Add a New Task?"   
                                    onBlur={(e)=>{newTasks(boardIndex, e.target.value)}}/>
                                    <span>+</span>
                                </div>

{/* Task Cards */}
                                {board.tasks.map((task, taskIndex)=>{
                                    return (

                                        <div className="dndItems" key={Math.random()} draggable  
                                        // onDragStart={()=>{(console.log(`Drag started from Column: ${boardIndex + 1}, and over Task: ${taskIndex + 1}`))}}
                                        // onDragEnter={()=>{console.log(boardIndex, 'x', taskIndex )}}
                                        // onDragEnter={()=>{console.log(`Drag Ended on Column Index: ${boardIndex + 1}, and over Task: ${taskIndex + 1}` )}}
                                        >
                                            <div >{task}</div><span>...</span>
                                        </div>

                                    )})}

                            </div>)
                    })}
                </div> 
                <div className="addColumns" onClick={()=>{newColumns()}}> + Add a List</div>
                {/* {console.log(boardData)} */}
            </div>
        )
        
}

export default Kamban
