import { UserType, NoteItemType } from '../../types/common/main';

export const CONNECT_USER = "CONNECT_USER";
export const DISCONNECT_USER = "DISCONNECT_USER";
export const SET_USER = "SET_USER";

export const CLEAR_LIST_NOTES = "CLEAR_LIST_NOTES"
export const UPDATE_LIST_NOTES = "UPDATE_LIST_NOTES"

// FOR GET USER
export const connectUser = (user : UserType) => ({ type: CONNECT_USER, user});

export const disconnectUser = () => ({ type : DISCONNECT_USER });
export const setUser = (user : UserType) => ({ type : SET_USER});

export const clearListNotes = () => ({type : CLEAR_LIST_NOTES });
export const updateListNotes = (note_item : NoteItemType) => ({ type: UPDATE_LIST_NOTES, value: note_item});