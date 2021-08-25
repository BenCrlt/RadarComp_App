function listSkills(parent, args, context) {
    return context.prisma.skill.findMany();
}

function listItemsFromSkill(parent, args, context) {
    const skill_id = +args.skill_id;
    return context.prisma.item.findMany({where : {item_skill_id: skill_id}});
}

/*async function user(parent, args, context) {
    const id = +args.id;
    const userFound = await context.prisma.user.findUnique({where : {user_id: id}})
    return userFound
}*/
module.exports = {
    listSkills,
    listItemsFromSkill
}