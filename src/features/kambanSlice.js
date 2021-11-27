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
            state.kambanBoard.push({titles: action.payload})
        },
        addTasks: (state,action)=> {
            state.tasks = action.payload
        }
    }
})

export const { addColumn, addCard, kambanState} = kambanSlice.actions

export default kambanSlice.reducer