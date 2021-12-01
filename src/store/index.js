import { configureStore } from "@reduxjs/toolkit"
import kambanSlice from "../features/kambanSlice.js"
export const store = configureStore({
reducer:{ kambanSlice }
})

