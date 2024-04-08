import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selector";
import { selectContacts } from "./slice";

export const Register = (value) => value.toLocaleLowerCase();

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, name) => {
    if (!name.trim()) return contacts;

    return contacts.filter((contact) =>
      Register(contact.name).includes(Register(name))
    );
  }
);
