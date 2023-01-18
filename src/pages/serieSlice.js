
import { createSlice } from '@reduxjs/toolkit';

export const serieSlice = createSlice({
    name: 'serie',
    initialState: {
      choosen : {}
    },
    reducers: {
      select: (state, action) => {
        return {
          ...state,
          ...action.payload
        }
      }
    }
    
});

//Acciones que modificarán RDX
export const { select } = serieSlice.actions;

//Estado del que leeremos RDX
export const serieData = (state) => state.serie;

export default serieSlice.reducer;