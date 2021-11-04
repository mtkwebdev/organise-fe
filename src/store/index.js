import { configureStore } from "@reduxjs/toolkit"
import kambanBoard from "../features/kambanSlice.js"
export const store = configureStore({
reducer:{ kambanBoard }
})

