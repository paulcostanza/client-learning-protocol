import { createSlice } from '@reduxjs/toolkit'

export const questionReducer = createSlice({
    name: 'questions',
    initialState: {
        queue: [], // gets questions from database and stores them here
        answer: [], // gets answers from database
        trace: 0 // index of where the user is currently for the questions
    },

    // reducer: allows you to specify an action
    // the action allows you to change the value of the store 
    reducers: {
        startExamAction: (state, action) => { state.queue = action.payload }
    }
})

export const { startExamAction } = questionReducer.actions

export default questionReducer.reducer