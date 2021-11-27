import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {addColumn, addTasks} from '../../../features/kambanSlice.js'
import './kambanStyles.scss'


function Kamban() {

const dispatch = useDispatch()
const boardData = useSelector(state => {return state.kambanSlice.kambanBoard})
const stateTitles = useSelector(state => {return state.kambanSlice.kambanBoard.titles})
const stateTasks = useSelector(state => {return state.kambanSlice.kambanBoard.tasks})

const [boardState, setBoardState] = useState(boardData)

useEffect(() => {
    setBoardState(boardData)
}, [boardData])

function columns(){
    dispatch(addColumn('new Column'))
    // {console.log(boardData)}
}

function tasks(boardIndex){
    dispatch(addTasks({index: boardIndex, task:'tings'}))
    // {console.log(boardData)}
}

        return (
            <div className="dndContainer">
                <div className="dndGroups">
                {boardState.map((board, boardIndex)=>{
                return (
                    <div key={Math.random()} className="column" >
                        <input type="text" placeholder="Add a List Title?" className="listTitle"/>
                        <div className="addTasks">
                            <input type="text" placeholder="Add a New Task?" className="newTask"/><span onClick={()=>{tasks(boardIndex)}}>+</span>
                        </div>
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
