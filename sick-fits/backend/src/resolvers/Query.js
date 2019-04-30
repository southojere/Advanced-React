// Query resolvers
const Query = {
    users(parent,arg,context,info){
        return [{name:'jeremy'}, {name:'dan'}]
    }


};



module.exports = Query;
