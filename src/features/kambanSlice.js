import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    kambanBoard:[
        {
            titles: 'Column 1',
            tasks: ['tawefwefkw;efkw;efkwefkweofkw;efksk', 'task', 'task']
        },
        {
            titles: 'Column 2',
            tasks: ['task' ]
        },
        {
            titles: 'Column 3',
            tasks: ['task', 'task' ]
        },
    ]
}

export const kambanSlice = createSlice({
    name: "kambanBoard",
    initialState,
    reducers: {
        addColumn: (state = initialState, action)=> {
            state.kambanBoard.push({titles: action.payload, tasks: []})
        },
        addTasks: (state = initialState, action)=> {
            let {index, task} = action.payload

            if (index >= (state.kambanBoard.length - 1)) {
                index = (state.kambanBoard.length - 1)
                state.kambanBoard[index].tasks.push(task)
              } 
              if (index < (state.kambanBoard.length - 1)) {
                state.kambanBoard[index].tasks.push(task)
              }
           console.log(index, task, state.kambanBoard.length)
        }
    }
})

export const { addColumn, addTasks, kambanState} = kambanSlice.actions

export default kambanSlice.reducer