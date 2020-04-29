const Users = [
    { Name: 'Admin', Password: '1111', Email: 'a@ft.com', UserID: 0 },
    { Name: 'Mike', Password: '2020', Email: 'm@ft.com', UserID: 1 },
    { Name: 'Beck', Password: '2121', Email: 'b@ft.com', UserID: 2 },
];

module.exports = {
    Login(email, password) {
        const user = Users.find(x => x.Email == email);
        if(!user) throw Error('User not found');
        if(user.Password != password) throw Error('Wrong Password');
        return user;
    },
}