const Mutations = {

    createUser(parent,args,context,info) {
        global.users = global.users || [];
        const user = {name:args.name}
        global.users.push(user);
        console.log(global.users);
    }
};

module.exports = Mutations;
