async function signup(parent, args, context) {
    const userFound = await context.prisma.user.findUnique({where : {user_email : args.email }})
    if (!userFound) {
        return await context.prisma.user.create({ data: {
            user_email: args.email,
            user_password: args.password,
            user_first_name: args.first_name,
            user_last_name: args.last_name
        }});
    } else {
        throw new Error("User already exist");
    }
}

async function login(parent, args, context) {
    const userFound = await context.prisma.user.findUnique({where : {user_email : args.email}});
    const matchPassword = userFound.user_password === args.password ? true : false;
    if (userFound && matchPassword) {
        return userFound
    }
}

async function createEvaluation(parent, args, context) {
    const userFound = await context.prisma.user.findUnique({ where: {user_id: args.user_id}});
    console.log(userFound)
    const eval_created = await context.prisma.evaluation.create({data: {
        eval_user: userFound
    }})
    console.log(eval_created);
}

module.exports = {
    signup,
    login,
    createEvaluation
}   