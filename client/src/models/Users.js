export const Users = [
    { Name: 'Admin', Password: '1111', Email: 'a@ft.com', userId: 0 },
    { Name: 'Mike', Password: '2020', Email: 'm@ft.com', userId: 1 },
    { Name: 'Beck', Password: '2121', Email: 'b@ft.com', userId: 2 },
];

export let CurrentUser = null;

export function Login(email, password) {
    const user = Users.find(x => x.Email == email);
    if(!user) throw Error('User not found');
    if(user.Password != password) throw Error('Wrong Password');
    
    return CurrentUser = user;
}