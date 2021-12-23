import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import userReducer from '../features/user/userSlice';
import warehouseReducer from '../features/warehouse/warehouseSlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user:userReducer,
    warehouse:warehouseReducer
  },
});
