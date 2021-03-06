import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    kambanBoard:[
        {
            titles: 'Column 1',
            columnIndex: 0,
            tasks: [{task: "111", index: 0},{task: "222", index: 2},{task: "333", index: 1}]
        },
        {
            titles: 'Column 2',
            columnIndex: 2,
            tasks: [{task: "aaa", index: 0}]
        },
        {
            titles: 'Column 3',
            columnIndex: 1,
            tasks: [{task: "zzz", index: 0},{task: "xxx", index: 1},{task: "ccc", index: 2}]
        },
        {
            titles: 'Column 4',
            columnIndex: 3,
            tasks: [{task: "qqq", index: 2},{task: "www", index: 1},{task: "eee", index: 0}]
        },
    ]
}
// const initialState = {
    // kambanBoard:[
    //     {
    //         titles: 'Column 1',
    //         columnIndex: 0,
    //         tasks: [["11",0],["222",1],["333",2]]
    //     },
    //     {
    //         titles: 'Column 2',
    //         columnIndex: 2,
    //         tasks: [["aaa",2],["bbb",1],["ccc",0]]
    //     },
    //     {
    //         titles: 'Column 3',
    //         columnIndex: 1,
    //         tasks: [["xxx",1],["yyy",2],["zzz",0]]
    //     }
        // ,
        // {
        //     titles: 'Column 4',
        //     columnIndex: 3,
        //     tasks: [["qqq",0],["www",2],["eee",1]]
        // },
    // ]
// }

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
        },
        dragActions: (state = initialState, action)=>{
            const {index1, index2, task1, task2} = action.payload
                state.kambanBoard[index1].tasks = task1
                state.kambanBoard[index2].tasks = task2
        }
    }
})

export const { addColumn, addTasks, kambanState} = kambanSlice.actions

export default kambanSlice.reducer