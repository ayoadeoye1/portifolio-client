import { createSlice } from "@reduxjs/toolkit";

export const initialState = ({
    time: false,
    score: 0,
    loggedIn: false,
})

const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers:{
        submitUser: (state) =>{
            state.time = true;
        },
        addScore: (state) =>{
            state.score +=1
        },
        zeroScore: (state) =>{
            state.score +=0
        },
        isLog: (state) => {
            state.loggedIn = true
        },
        notLog: (state) => {
            state.loggedIn = false
        },
        
    }
})

export const { submitUser, addScore, zeroScore, isLog, notLog } = quizSlice.actions;

export default quizSlice.reducer