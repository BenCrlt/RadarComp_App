function user_list_evals(parent, args, context) {
    return context.prisma.user.findUnique({ where: { user_id: parent.user_id } }).user_list_evals()
}

module.exports = {
    user_list_evals
}