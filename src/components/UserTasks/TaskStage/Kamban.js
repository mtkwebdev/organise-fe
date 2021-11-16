import React from 'react'
import {useSelector} from 'react-redux'
// import TaskCard from '../Cards/TaskCard'
// import TaskColumns from './TaskColumns'
// import './TasksDisplay.scss'
import './kambanStyles.scss'
// import {Card} from 'react-bootstrap'

function Kamban() {

// const dispatch = useDispatch()
const boardData = useSelector(state => {return state.kambanSlice.kambanBoard})


  
        return (
            <div className="dndContainer">
            <div className="dndGroups">

           {boardData.map((board)=>{
               return (<div key={Math.random()} className="column">
                        <input type="text" placeholder="Add a List Title?" className="listTitle"/>
                        <div className="addTasks">
                            <input type="text" placeholder="Add a New Task?" className="newTask"/><span>+</span>
                        </div>
                        {board.tasks.map((task)=>{
                            return (<div className="dndItems">
                                        <div>{task}</div><span>...</span>
                                    </div>
                                    )})}
                        </div>)
           })}
            </div>
            <div className="addColumns" > + Add a List</div>
            </div>
        )
        
}

export default Kamban
