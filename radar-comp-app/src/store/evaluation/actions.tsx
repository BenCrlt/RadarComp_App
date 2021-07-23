import { NoterType } from "../../types/common/main";

export const UPDATE_NOTE_ITEM = 'UPDATE_NOTE_ITEM';

export const FETCH_LIST_SKILLS = "FETCH_LIST_SKILLS"; 
export const FETCH_LIST_SKILLS_BEGIN = "FETCH_LIST_SKILLS_BEGIN"; 
export const FETCH_LIST_SKILLS_SUCCESS = "FETCH_LIST_SKILLS_SUCCESS"; 
export const FETCH_LIST_SKILLS_ERROR = "FETCH_LIST_SKILLS_ERROR"; 

export const FETCH_LIST_ITEMS = "FETCH_LIST_ITEMS";
export const FETCH_LIST_ITEMS_BEGIN = "FETCH_LIST_ITEMS_BEGIN";
export const FETCH_LIST_ITEMS_SUCCESS = "FETCH_LIST_ITEMS_SUCCESS";
export const FETCH_LIST_ITEMS_ERROR = "FETCH_LIST_ITEMS_ERROR";


// FOR UPDATE LIST ITEMS VALUE
export const updateNoteItem = (note_item : NoterType) => ({ type: UPDATE_NOTE_ITEM, value: note_item});