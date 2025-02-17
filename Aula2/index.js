//class base user
class Usuario{
    constructor(nome,email,senha){
        this.nome = nome;
        this.email = email;
        this._senha  = senha;//atributo privado
    }
    autenticar(senha){
        return senha === this._senha;
    }
    alterarSenha(novaSenha){
       this._senha = novaSenha;
    console.log('Senha alterada com sucesso');
    }
   

}
//Class admim que herda user
class Admin extends Usuario{
    constructor(nome,email,senha,nivelAcesso){
        super(nome,email,senha);
        this.nivelAcesso = nivelAcesso;
    }
    banirUsuario(Usuario){
        console.log(`${Usuario.nome} foi banido pelo admin ${this.nome}`);
    }
    //Polimorfismo sobrepondo o método autenticar
    autenticar(senha){
        return senha === this._senha && this.nivelAcesso === 'alto';
    }
}


//exemplo de uso
const Usuario1 = new Usuario('Luiz','Luiz@gmail.com','1234');
const Usuario2 = new Admin('Maria','Maria@gmail.com','5678','alto');
console.log(Usuario1.autenticar('1234'));
console.log(Usuario2.autenticar('5678'));
Usuario2.banirUsuario(Usuario1);
