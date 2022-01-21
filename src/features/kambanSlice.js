import { createSlice } from "@reduxjs/toolkit";

//  stateSchema = {
//     kambanBoard:[
//         {
//             titles: 'Column 1',
//             columnStateIndex: 0,
//             columnID: "Column 0", 
//             tasks: [{task: " ", taskID: "task 0" index: 0},]
//         },
// }

const initialState = {
    kambanBoard:[
    ]
}

export const kambanSlice = createSlice({
    name: "kambanBoard",
    initialState,
    reducers: {
        addColumn: (state, action)=> {
            state.kambanBoard.push({
                titles: action.payload, 
                columnID:`Column ${(state.kambanBoard).length}`, 
                columnStateIndex: (state.kambanBoard).length, 
                tasks: []})
        },
        addTasks: (state = initialState, action)=> {
            let {index, task} = action.payload
            console.log(task)
            if (index >= (state.kambanBoard.length - 1)) {
                index = (state.kambanBoard.length - 1)
                state.kambanBoard[index].tasks.push({
                    task: task, 
                    taskID: `Task ${(state.kambanBoard[index].tasks).length}`, 
                    taskStateIndex: (state.kambanBoard[index].tasks).length})
              } 
              if (index < (state.kambanBoard.length - 1)) {
                state.kambanBoard[index].tasks.push({
                    task: task, 
                    taskID: `Task ${(state.kambanBoard[index].tasks).length}`, 
                    taskStateIndex: (state.kambanBoard[index].tasks).length})
              }
        }
    }
})

export const { addColumn, addTasks, kambanState} = kambanSlice.actions

export default kambanSlice.reducer