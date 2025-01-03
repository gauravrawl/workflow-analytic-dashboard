import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  workflowData: [],
  type: null,
};

const workflowSlice = createSlice({
  name: "workflow",
  initialState,
  reducers: {
    setWorkflowData(state, action) {
      state.workflowData = action.payload;
    },
    setType(state, action) {
        state.type = action.payload;
      },
  },
});

const { reducer, actions } = workflowSlice;

export const { setWorkflowData, setType } = actions;

export default reducer;
