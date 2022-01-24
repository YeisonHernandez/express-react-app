import { configureStore } from '@reduxjs/toolkit';
import AppSlice from '../redux/appSlice';

export default configureStore({
   reducer: {
      app: AppSlice,
   },
});
