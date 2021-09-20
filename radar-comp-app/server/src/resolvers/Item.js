function item_list_notes(parent, args, context) {
    return context.prisma.item.findUnique({where : {item_id: parent.item_id}}).item_list_notes();
}

function item_skill(parent, args, context) {
    return context.prisma.item.findUnique({where : {item_id: parent.item_id}}).item_skill();
}

module.exports = {
    item_list_notes,
    item_skill
}