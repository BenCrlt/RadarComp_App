function listSkills(parent, args, context) {
    return context.prisma.skill.findMany();
}

function listItemsFromSkill(parent, args, context) {
    const skill_id = +args.skill_id;
    return context.prisma.item.findMany({where : {item_skill_id: skill_id}});
}

function user(parent, args, context) {
    console.log(args)
    const id = +args.id;
    return context.prisma.user.findUnique({where : {user_id: id}})
}

module.exports = {
    listSkills,
    listItemsFromSkill,
    user
}