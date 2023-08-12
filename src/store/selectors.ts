import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store ";

const usersSlice = (state: RootState) => state.usersSlice;

export const userSelector = createSelector(
  [usersSlice],
  (usersSlice) => usersSlice.user
);

export const statusSelector = createSelector(
  [usersSlice],
  (usersSlice) => usersSlice.status
);
