async function signup(parent, args, context) {
    const userFound = await context.prisma.user.findUnique({where : {user_email : args.email }})
    if (!userFound) {
        return await context.prisma.user.create({ data: {
            user_email: args.email,
            user_password: args.password,
            user_first_name: args.first_name,
            user_last_name: args.last_name
        }});
    }
}

async function login(parent, args, context) {
    const userFound = await context.prisma.user.findUnique({where : {user_email : args.email}});
    if (userFound) {
        return (userFound.user_password === args.password) && userFound;
    }
}

async function createEvaluation(parent, args, context) {
    const user_id = +args.user_id;
    return await context.prisma.evaluation.create({data: {
        eval_user_id: user_id
    }})
}

async function addNoteToEval(parent, args, context) {
    const item_id = +args.id_item;
    const eval_id = +args.id_eval;
    return await context.prisma.noter.create({data: {
        noter_eval_id: eval_id,
        noter_item_id: item_id,
        noter_value: args.value
    }})

}

module.exports = {
    signup,
    login,
    createEvaluation,
    addNoteToEval
}   