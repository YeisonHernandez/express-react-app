import {
   createAsyncThunk
} from '@reduxjs/toolkit'
import {
   getAnimals,
   postAnimal,
   deleteAnimal,
   putAnimal
} from '../../services/animalsAPI';

const fetchAnimals = createAsyncThunk(
   'app/fetchAnimals',
   async () => {
      try {
         const response = await getAnimals()
         return response.data
      } catch (err) {
         let error = err
         if (!error.response) {
            throw err
         }
      }
   }
)

const updateAnimal = createAsyncThunk(
   'app/update',
   async (animal) => {
      try {
         const response = await putAnimal(animal)
         return response.data
      } catch (err) {
         throw err
      }
   }
);

const createAnimal = createAsyncThunk(
   'app/post',
   async (animal) => {
      try {
         const response = await postAnimal(animal)
         return response.data
      } catch (err) {
         throw err
      }
   }
);

const eraseAnimal = createAsyncThunk(
   'app/delete',
   async (id) => {
      try {
         const response = await deleteAnimal(id)
         return response.data
      } catch (err) {
         throw err
      }
   }
);

export {
   fetchAnimals,
   updateAnimal,
   createAnimal,
   eraseAnimal,
};