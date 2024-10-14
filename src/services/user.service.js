const {save, User} = require('../models/user.model');
const {getAllUsers} = require('../models/user.model'); 

const addNewUser = (name, lastname, email) =>{
    const newUser = new User(name, lastname, email);
    return save(newUser);
}

const fetchAllUsers = () => {
    return getAllUsers(); 
};

module.exports = {
    addNewUser,
    fetchAllUsers 
}