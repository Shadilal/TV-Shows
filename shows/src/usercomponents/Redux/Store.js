import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../Redux/Search";
import favoriteShow from "../Redux/Fav"

export const Store = configureStore({
  reducer:{
    search:searchReducer,
    favorites:favoriteShow
  }
});
