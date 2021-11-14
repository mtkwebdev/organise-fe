
import React, {useState, useRef} from 'react'
import './kambanStyles.scss'

function Kamban() {

const [content, setContent] = useState([]]) 


function addColumnTitle(e, logs){
    // setContent(...content.titles = {titles: e.target.value})
    // console.log(...content.titles = {titles: e.target.value})
    // console.log(...content.titles)
    // console.log(...content, {titles: e.target.value}, logs)
    // setContent(...content, {titles: e.target.value})
    // e.target.value = defaultState.titles
    // if (e.target.value !== ((''|| null)|| undefined)){
        mockData[logs].titles = e.target.value
        console.log(mockData)
    // }
}

// // function addNewTask(e, parentColumn){
// function addNewTask(index, e,){
//     console.log(index, e)
//     // console.log('hello')
// }

function addNewColumn(){
//     // setContent({
//     //     titles: '',    
//     //     tasks: []})
//         // setContent(...content, content.concat({titles: 'group', tasks: ['']}))
        
       setContent(...content, {titles: '', tasks: []})
        console.log(content)
}

function swapColumns (e, index, column, taskIndex, task){
    // console.log(index, column, task)
    console.log(`Column: ${column}, Index: ${index+1} Task number: ${taskIndex+1}, Task: ${task}`)
}

    // if (data.length > 0) {
        return (
            <div className="dndContainer">
                <div className="dndGroups">
                    {()=>{content.forEach((column, columnIndex)=>(
        <div key={(columnIndex+1, column.titles)} draggable  className="columns">
            <div className="column">
                <input className="addColumnTitle" type="text" onBlur={(e)=>{addColumnTitle(e, columnIndex)}} />
                <div className="addTask">Add Task</div>                        
                <input name='task' placeholder="Type New Task Here!" type="text" ref={newTask} />
                    {column.tasks.forEach((task, taskIndex)=>(
                <div key={(columnIndex+1, task+1, Math.random())} draggable onClick={(e)=>{swapColumns(e, columnIndex, column.titles, taskIndex, task)}} className="dndItems">
                        {task}
                        <span>...</span>
                </div>
                    ))}
            </div>
        </div>
        ))}}
                </div>
                <div className="addColumns" onClick={addNewColumn}> + Add a group of Tasks</div>
                {/* need to use Redux to set out template data, useDispatch to add new tasks to state, useSelector to display data */}
            </div>
        )
    // }
    // else {
    //     return (
    //         <div className="dndContainer">
    //         <div className="addColumns" onClick={()=>{data.push({titles: 'group1', tasks: ['']})}}> + Add a group of Tasks</div>
    //         </div>
    //     )
    // }
        
}

export default Kamban
