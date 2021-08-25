function skill_items(parent, args, context) {
    return context.prisma.skill.findUnique({where : {skill_id: parent.skill_id}}).skill_items();
}

module.exports = {
    skill_items
}