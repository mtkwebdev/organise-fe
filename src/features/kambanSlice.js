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
        // Column: (state,action)=> {
        //     state.titles. = action.payload
        // },
        addColumn: (state = initialState, action)=> {
            state.kambanBoard.push({titles: action.payload})
        },
        addTasks: (state,action)=> {
            state.tasks = action.payload
        },
        kambanState: (state, action) => {
            state = state.push(action.payload)
        }
        
    }
})

export const { addColumn, addCard, kambanState} = kambanSlice.actions

export default kambanSlice.reducer