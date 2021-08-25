function noter_eval(parent, args, context) {
    return context.prisma.noter.findUnique({where : { noter_id: parent.noter_id}}).noter_eval()
}

function noter_item(parent, args, context) {
    return context.prisma.noter.findUnique({ where: { noter_id: parent.noter_id}}).noter_item()
}

module.exports = {
    noter_eval,
    noter_item
}