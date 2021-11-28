import React, {useState, useEffect, useRef} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {addColumn, addTasks} from '../../../features/kambanSlice.js'
import './kambanStyles.scss'


function Kamban() {
const dispatch = useDispatch()
const boardData = useSelector(state => {return state.kambanSlice.kambanBoard})
const stateTitles = useSelector(state => {return state.kambanSlice.kambanBoard.titles})
const stateTasks = useSelector(state => {return state.kambanSlice.kambanBoard.tasks})

// mapping and updating Kamban board state
const [boardState, setBoardState] = useState(boardData)
const [value, setValue] = useState({
    title: '',
    task: ''
})
useEffect(() => {
    setBoardState(boardData)
}, [boardData])

// input values
const columnValue = useRef(null)
const taskValue = useRef(null)
const innerTaskText = taskValue.value

function columns(){
    dispatch(addColumn('new Column'))
    // {console.log(boardData)}
}

function tasks(boardIndex, value){
    // dispatch(addTasks({index: boardIndex, task:'tings'}))
    if (value === '' || (undefined || null)){return } else {dispatch(addTasks({index: boardIndex, task: value}))}
    console.log(value)
}

function collectData(collected){
    setValue(collected)
    console.log(collected)
}

        return (
            <div className="dndContainer">
                <div className="dndGroups">
                    {boardState.map((board, boardIndex)=>{
                            {/* Columns */}
                        return (
                            
                            <div draggable key={Math.random()} className="column" >
                                <input  type="text" placeholder="Click here to add a Title!" className="listTitle"/>
                                <div className="addTasks">
                                    <input type="text" placeholder="Add a New Task?" className="newTask"  
                                    ref={taskValue} onBlur={(e)=>{tasks(boardIndex, e.target.value)}}/>
                                    <span>+</span>
                                </div>

                                {/* Task Cards */}
                                {board.tasks.map((task, taskIndex)=>{
                                    return (

                                        <div key={Math.random()} draggable className="dndItems" 
                                        onDragEnter={()=>{console.log(boardIndex, 'x', taskIndex )}}>
                                            <div >{task}</div><span>...</span>
                                        </div>

                                    )})}

                            </div>)
                    })}
                </div> 
                <div className="addColumns" onClick={()=>{columns()}}> + Add a List</div>
                {console.log(boardData)}
            </div>
        )
        
}

export default Kamban
