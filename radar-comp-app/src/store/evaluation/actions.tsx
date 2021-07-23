import axios, { AxiosError, AxiosResponse } from "axios";

export const UPDATE_ITEM_VALUE = 'UPDATE_ITEM_VALUE';

export const FETCH_LIST_SKILLS = "FETCH_LIST_SKILLS"; 
export const FETCH_LIST_SKILLS_BEGIN = "FETCH_LIST_SKILLS_BEGIN"; 
export const FETCH_LIST_SKILLS_SUCCESS = "FETCH_LIST_SKILLS_SUCCESS"; 
export const FETCH_LIST_SKILLS_ERROR = "FETCH_LIST_SKILLS_ERROR"; 


// FOR UPDATE LIST ITEMS VALUE
export const addItemValue = (item : ListItemsType) => ({ type: UPDATE_ITEM_VALUE, value: item});

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