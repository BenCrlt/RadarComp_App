import { AxiosError } from "axios"

type StateType = {
    eval: EvalType,
    common: CommonStateType
}

type EvalType = {
    date: Date,
    listNotes: NoterType[],
    listSkills: SkillType[],
    listItems: ItemType[],
    error: any
}

type NoterType = {
    noter_item_id: number,
    noter_value: number
}

type SkillType = {
    skill_id : number,
    skill_title : string
}

type ItemType = {
    item_id: number,
    item_skill_id: number,
    item_title: string
}

type CommonStateType = {
    listSkills: SkillType[],
    listItems: ItemType[],
    error: AxiosError
}