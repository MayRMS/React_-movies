
import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../pages/User/userSlice';

export default configureStore({
    reducer: {
        user: userSlice
    }
    
});