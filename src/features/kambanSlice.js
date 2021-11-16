import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    kambanBoard:[
        {
            titles: 'Column 1',
            tasks: ['task', 'task', 'task', 'task', 'task', 'task', 'task', 'task', 'task', 'task', 'task', 'task', 'task', 'task', 'task', 'task', 'task', 'task', 'task', 'task', 'task', 'task', 'task', 'task', 'task', 'task', 'task', 'task', 'task', 'task', 'task', 'task']
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
        addColumn: (state,action)=> {
            state.titles = action.payload
        },
        addTasks: (state,action)=> {
            state.tasks = action.payload
        },
        kambanState: (state = initialState, action) => {
            state = action.payload
        }
        
    }
})

export const { addColumn, addCard, kambanState} = kambanSlice.actions

export default kambanSlice.reducer