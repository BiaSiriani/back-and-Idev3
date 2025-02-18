const user = require("./user");

class userServer{
    constructor(){
        this.users = [];// Array to amarzenar user
        this.nextid =1;//contador para gerar id
    }

    adduser(nome,email){
        const user =new user(this.nextid++, nome, email);
        this.users.push(user)
        return user;
    }

    getuser(){
        return this.users
    }

}
modulo;exports = new userServer;
