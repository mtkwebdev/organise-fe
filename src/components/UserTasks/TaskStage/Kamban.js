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
        if (value === '' || (undefined || null)){ return } else {dispatch(addTasks({index: boardIndex, task: value}))}
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
                {boardState.forEach((board)=>{
                    let newData = [board.columnIndex, board.titles]
                    newData[0].sort()
                    console.log(newData)
                })}
                    {boardState.map((board, boardIndex)=>{
                        return (
                            
                            <div className="column" key={Math.random()} draggable >
                                <input className="listTitle" type="text" placeholder="Click here to add a Title!" />
                                <div className="addTasks">
                                    <input className="newTask" type="text" placeholder="Add a New Task?"   
                                    // onBlur={(e)=>{newTasks(boardIndex, e.target.value)}}
                                    />
                                    <span>+</span>
                                </div>

{/* Task Cards */}
                                {board.tasks.map((task)=>{
                                    return (
                                        <div className="dndItems" key={Math.random()} draggable >
                                            <div >{task.task}</div><span>...</span>
                                        </div>

                                    )})}

                            </div>)
                    })}
                </div> 
                <div className="addColumns" onClick={()=>{newColumns()}}> + Add a List</div>
                {console.log(boardData)}
            </div>
        )
        
}

export default Kamban
