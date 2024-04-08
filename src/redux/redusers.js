import contactsSlice from "./contacts/slice";
import filtersSlice from "./filters/slice";
import authSlice from "./auth/slice";

export const rootReducer = {
  contacts: contactsSlice,
  filters: filtersSlice,
  auth: authSlice,
};
