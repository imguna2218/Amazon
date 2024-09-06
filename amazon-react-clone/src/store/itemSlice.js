// itemSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  clothItems: [],
  healthCareItems: [],
  furnitureItems: [],
  electronicItems: [],
  beautyItems: [],
  petCareItems: [],
  toyItems: [],
  fashionItems: []
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addInitialItems: (state, action) => {
      return state;
    }
  }
});

export const itemsActions = itemsSlice.actions;

export default itemsSlice;
