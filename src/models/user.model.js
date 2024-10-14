class User {
    constructor(name, lastname, email){
        this.id = Date.now().toString();
        this.name = name;
        this.lastname = lastname;
        this.email = email;
    }
}

const users = [];

const save = (user) =>{
    users.push(user);
    return user;
}

const getAllUsers = () => {
    return users; // Devuelve la lista de usuarios
};

module.exports = {
    User,
    save,
    getAllUsers 
}