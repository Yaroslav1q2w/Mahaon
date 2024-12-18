import { configureStore } from "@reduxjs/toolkit";
import formReducer from "../reducers/form.reducer";

const store = configureStore({
	reducer: {
		form: formReducer,
	},
});

export default store;
