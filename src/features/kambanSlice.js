import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    kambanBoard:[
        {
            titles: '',
            tasks: []
        }
    ]
}

export const kambanBoard = createSlice({
    name: "kambanBoard",
    initialState,
    reducers: {
        addColumn: (state,action)=> {
            state.kambanBoard.titles = action.payload
        },
        addTasks: (state,action)=> {
            state.kambanBoard.tasks = action.payload
        },
    }
})

export const { addColumn, addCard} = kambanBoard.actions

export default kambanBoard.reducer