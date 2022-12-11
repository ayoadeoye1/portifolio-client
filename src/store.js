import { configureStore } from '@reduxjs/toolkit';
import quizSlice from './feature/quizSlice';

export const store = configureStore({
    reducer: {
        quiz: quizSlice
    },

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['submitUser'],
        // Ignore these field paths in all actions
        ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
        // Ignore these paths in the state
        ignoredPaths: ['items.dates'],
      },
    }),
})
