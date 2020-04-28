const Users = [
    { Name: 'Admin', Password: '1111', Email: 'a@ft.com', userId: 0 },
    { Name: 'Mike', Password: '2020', Email: 'm@ft.com', userId: 1 },
    { Name: 'Beck', Password: '2121', Email: 'b@ft.com', userId: 2 },
];

module.exports = {
    Users,
    Login(Email, Password) {
        const user = Users.find(x => x.Email == Email);
        if(!user) throw Error('User not found');
        if(user.Password != Password) throw Error('Wrong Password');

        return user;
    },
    //Get(userId) {
    //    return Users[userId]
    //}
}