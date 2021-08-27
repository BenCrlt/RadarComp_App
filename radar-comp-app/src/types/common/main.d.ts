import { AxiosError } from "axios"

type StateType = {
    eval: EvalType,
    common: CommonStateType
}

type UserType = {
    user_id : number,
    user_email: string,
    user_first_name: string,
    user_last_name : string,
    user_password : string,
    user_list_evals: EvalType[]
}

type EvalType = {
    eval_id: number,
    eval_date: Date,
    eval_user: UserType,
    eval_list_notes: NoterType[]
}

type NoterType = {
    noter_eval: EvalType,
    noter_item: ItemType,
    noter_value: number
}

type SkillType = {
    skill_id : number,
    skill_title : string,
    skill_items: ItemType[]
}

type ItemType = {
    item_id: number,
    item_skill: SkillType,
    item_title: string,
    item_list_notes: NoterType[]
}

type CommonStateType = {
    user : UserType,
    isUserConnected : boolean,
    listSkills: SkillType[],
    listItems: ItemType[],
    error: AxiosError
}