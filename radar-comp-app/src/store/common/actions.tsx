import axios, { AxiosError, AxiosResponse } from 'axios'
import { ItemType, SkillType } from '../../types/common/main';

export const FETCH_LIST_SKILLS = "FETCH_LIST_SKILLS"; 
export const FETCH_LIST_SKILLS_BEGIN = "FETCH_LIST_SKILLS_BEGIN"; 
export const FETCH_LIST_SKILLS_SUCCESS = "FETCH_LIST_SKILLS_SUCCESS"; 
export const FETCH_LIST_SKILLS_ERROR = "FETCH_LIST_SKILLS_ERROR"; 

export const FETCH_LIST_ITEMS = "FETCH_LIST_ITEMS";
export const FETCH_LIST_ITEMS_BEGIN = "FETCH_LIST_ITEMS_BEGIN";
export const FETCH_LIST_ITEMS_SUCCESS = "FETCH_LIST_ITEMS_SUCCESS";
export const FETCH_LIST_ITEMS_ERROR = "FETCH_LIST_ITEMS_ERROR";

// FOR GET LIST SKILLS
export const fetchListSkills = () => async (dispatch : any) => {
    dispatch(fetchListSkillsBegin);
    axios.get('http://localhost:3000/api/list_skills')
        .then((res : AxiosResponse) => {
            dispatch(fetchListSkillsSuccess(res.data))
        })
        .catch((err : AxiosError) => {
            dispatch(fetchListSkillsError(err))
        })
}

export const fetchListSkillsBegin = () => ({type : FETCH_LIST_SKILLS_BEGIN});
export const fetchListSkillsSuccess = (skills : SkillType) => ({ type : FETCH_LIST_SKILLS_SUCCESS, skills});
export const fetchListSkillsError = (error : AxiosError) => ({ type : FETCH_LIST_SKILLS_ERROR, error});

// FOR GET LIST ITEMS
export const fetchListItems = () => async (dispatch : any) => {
    dispatch(fetchListItemsBegin);
    axios.get('http://localhost:3000/api/list_items')
        .then((res : AxiosResponse) => {
            dispatch(fetchListItemsSuccess(res.data));
        }) 
        .catch((err : AxiosError) => {
            dispatch(fetchListItemsError(err));
        })
}

export const fetchListItemsBegin = () => ({ type: FETCH_LIST_ITEMS_BEGIN});
export const fetchListItemsSuccess = (items : ItemType) => ({ type : FETCH_LIST_ITEMS_SUCCESS, items});
export const fetchListItemsError = (error : AxiosError) => ({ type : FETCH_LIST_SKILLS_ERROR, error});