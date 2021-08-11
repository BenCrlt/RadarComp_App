function notes(parent, args, context) {
    return context.prisma.evaluation.findMany({where : { id: parent.id }}).noter();
}

module.exports = {
    notes
}