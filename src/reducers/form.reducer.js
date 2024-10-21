import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	step1: {
		name: "",
		contact: "",
		company: "",
		website: "",
	},
	step2: {
		services: [],
		goals: [],
		audience: "",
	},
	step3: {
		duration: "",
		budget: "",
		additionalInfo: "",
	},
};

const formSlice = createSlice({
	name: "form",
	initialState,
	reducers: {
		updateStep1: (state, { payload }) => {
			state.step1 = payload;
		},
		updateStep2: (state, { payload }) => {
			state.step2 = payload;
		},
		updateStep3: (state, { payload }) => {
			state.step3 = payload;
		},
	},
});

export const { updateStep1, updateStep2, updateStep3 } = formSlice.actions;

export default formSlice.reducer;
