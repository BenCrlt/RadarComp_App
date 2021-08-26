function eval_list_notes(parent, args, context) {
    return context.prisma.evaluation.findUnique({where : { eval_id: parent.eval_id }}).eval_list_notes();
}

function eval_user(parent, args, context) {
    return context.prisma.evaluation.findUnique({where: {eval_id : parent.eval_id}}).eval_user();
}

module.exports = {
    eval_list_notes,
    eval_user
}