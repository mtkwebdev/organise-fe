import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    column: {
        id: [],
        labels: [],
        length:[]
    },
    cards: []
}

export const kambanBoard = createSlice({
    name: "kambanBoard",
    initialState,
    reducers: {
        addColumn: (state,action)=> {
            state.column.id = action.payload
            state.column.labels = action.payload
            state.column.length = action.payload
        },
        addCard: (state,action)=> {
            state.cards.id = action.payload
            state.cards.content = action.payload
            state.cards.priority = action.payload
        },

    }
})

export const { addColumn, addCard} = kambanBoard.actions

export default kambanBoard.reducer