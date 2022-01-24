import { createSlice } from '@reduxjs/toolkit';
import {
   fetchAnimals,
   eraseAnimal,
   updateAnimal
} from './reducers/thunks';

export const AppSlice = createSlice({
   name: 'app',
   initialState: {
      entities: [],
      loading: 'idle',
      currentRequestId: undefined,
      error: null,
      currentEntity: {}
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchAnimals.pending, (state, action) => {
            if(state.loading === 'idle'){
               state.loading = 'pending'
               state.currentRequestId = action.meta.requestId
            }
         })
         .addCase(fetchAnimals.fulfilled, (state, action) => {
            const { requestId } = action.meta
            if (
               state.loading === 'pending' &&
               state.currentRequestId === requestId
            ) {
               state.loading = 'idle'
               state.entities = action.payload;
               state.currentRequestId = undefined
            }
         })
         .addCase(fetchAnimals.rejected, (state, action) => {
            const { requestId } = action.meta
            if (
               state.loading === 'pending' &&
               state.currentRequestId === requestId
            ) {
               state.loading = 'idle'
               state.error = action.error
               state.currentRequestId = undefined
            }
         })

         .addCase(eraseAnimal.pending, (state, action) => {
            if(state.loading === 'idle'){
               state.loading = 'pending'
               state.currentRequestId = action.meta.requestId
            }
         })
         .addCase(eraseAnimal.fulfilled, (state, action) => {
            const { requestId } = action.meta
            if (
               state.loading === 'pending' &&
               state.currentRequestId === requestId
            ) {
               state.loading = 'idle'
               state.entities = state.entities.filter( a => a.id !==  action.meta.arg);
               state.currentRequestId = undefined
            }
         })
         .addCase(eraseAnimal.rejected, (state, action) => {
            const { requestId } = action.meta
            if (
               state.loading === 'pending' &&
               state.currentRequestId === requestId
            ) {
               state.loading = 'idle'
               state.error = action.error
               state.currentRequestId = undefined
            }
         })

         .addCase(updateAnimal.pending, (state, action) => {
            if(state.loading === 'idle'){
               state.loading = 'pending'
               state.currentRequestId = action.meta.requestId
            }
         })
         .addCase(updateAnimal.fulfilled, (state, action) => {
            const { requestId } = action.meta
            if (
               state.loading === 'pending' &&
               state.currentRequestId === requestId
            ) {
               state.loading = 'idle'
               const newArr = state.entities.filter(e => e.id !== parseInt(action.payload.id));
               state.entities = [...newArr, action.payload].sort((a, b) => a.id > b.id ? 1 : a.id < b.id ? -1 : 0);
               state.currentRequestId = undefined
            }
         })
         .addCase(updateAnimal.rejected, (state, action) => {
            const { requestId } = action.meta
            if (
               state.loading === 'pending' &&
               state.currentRequestId === requestId
            ) {
               state.loading = 'idle'
               state.error = action.error
               state.currentRequestId = undefined
            }
         })
   }
});


export default AppSlice.reducer;
