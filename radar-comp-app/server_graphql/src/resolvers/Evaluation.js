function eval_list_notes(parent, args, context) {
    return context.prisma.evaluation.findUnique({where : { eval_id: parent.eval_id }}).eval_list_notes();
}

module.exports = {
    eval_list_notes
}