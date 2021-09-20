function noter_eval(parent, args, context) {
    return context.prisma.noter.findUnique({
        where: {
            noter_eval_id_noter_item_id: {
                noter_eval_id: parent.noter_eval_id,
                noter_item_id: parent.noter_item_id
            }
        }
    }).noter_eval()
}

function noter_item(parent, args, context) {
    return context.prisma.noter.findUnique({ 
        where: {
            noter_eval_id_noter_item_id: {
                noter_eval_id: parent.noter_eval_id,
                noter_item_id: parent.noter_item_id
            }
        }
    }).noter_item()
}

module.exports = {
    noter_eval,
    noter_item
}