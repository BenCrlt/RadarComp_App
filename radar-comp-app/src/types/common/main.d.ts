type StateType = {
    eval: StateEvalType
    
}

type StateEvalType = {
    listValueItems : ListItemsType[],
    listSkills: SkillType[],
    error: any
}

type ListItemsType = {
    item_id: number,
    item_skill_id: number,
    item_title: string,
    value: number
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
