import { AxiosError } from "axios"

type StateType = {
    common: CommonStateType
}

type UserType = {
    user_id : string,
    user_email: string,
    user_first_name: string,
    user_last_name : string,
    user_password : string,
    user_list_evals: EvalType[]
}

type EvalType = {
    eval_id: string,
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
    skill_id : string,
    skill_title : string,
    skill_items: ItemType[]
}

type ItemType = {
    item_id: string,
    item_skill: SkillType,
    item_title: string,
    item_list_notes: NoterType[]
}

type CommonStateType = {
    user : UserType,
    isUserConnected : boolean,
    listNotes: NoteItemType[]
}

type NoteItemType = {
    item_id: string,
    note: number
}