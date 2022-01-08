import React, {useState, useEffect, useRef} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import TaskCard from '../Cards/TaskCard'
import './kambanStyles.scss'

// Redux Actions
import {addColumn, addTasks, dragActions} from '../../../features/kambanSlice.js'


function Kamban({props}) {
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

    // let columns = []
    // let tasks = []
    // let aaaa = []
    // let organisedTasks = [] 
    
    //////////
        // boardState.slice(0).sort((a, b) => (a.columnIndex > b.columnIndex) ? 1 : -1).map((board)=> {
        //     boards = [board]; 
        // })

        //////
        // boardState.map((eachColumn)=>{return (
        //     columns.push(eachColumn)
        //     tasks.push(eachColumn.tasks)
        // )})
        // console.log(tasks)

        /////
        // columns.map((eachTask)=> tasks.push(eachTask.tasks))
        // for (let i = 0; i < tasks.length; i++){
            // console.log(tasks[i].length)
            // for (let x = 0; x < tasks[i].length; x++){
            //     console.log(tasks[i][x])
                // another.split(0).sort((a,b)=> a.tasks[i][x].index > b.tasks[i][x].index ? 1 : -1).map((result) => organisedTasks.push())
        //     }
        // }
        // console.log(organisedTasks)
    

// END >>>> Functions \\

//Render and JSX\\
        return (
            <div className="dndContainer">
                <div className="dndGroups">
                    {/* {boardState.slice(0).sort((a, b) => (a.columnIndex > b.columnIndex) ? 1 : -1).map((board)=> {
                        console.log(board)
                    })} */}
                    {/* {console.log(columns, tasks)} */}

                    {boardState.slice(0).sort((a, b) => (a.columnIndex > b.columnIndex) ? 1 : -1).map((column, columnIndex)=>{
                        return (

                            <div className="column" key={Math.random()} draggable >
                                <input className="listTitle" type="text" placeholder="Click here to add a Title!" />
                                <div className="addTasks">
                                    <input className="newTask" type="text" placeholder="Add a New Task?"
                                    // onBlur={(e)=>{newTasks(columnIndex, e.target.value)}}
                                    />
                                    <span>+</span>
                                </div>

                                <TaskCard taskData={column.tasks}></TaskCard>
{/* Task Cards */}
                         {/* {column.tasks.split(0).sort((a,b)=>(a.index > b.index) ? 1: -1 ).map((taskData)=>{ */}
                         {column.tasks.map((taskData, taskDataIndex)=>{
                            return (
                                <div className="dndItems" key={Math.random()} draggable >
                                {/* { taskData.task.split(0).sort(()=>((taskData.index) >= taskDataIndex) ? 1 : -1).map((sortedTasks)=>{
                                    console.log(sortedTasks)
                                    return sortedTasks
                                })} */}
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
