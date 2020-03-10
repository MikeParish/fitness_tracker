export const Users = [
    { Name: 'Admin', Password: '1111', Email: 'a@ft.com' },
    { Name: 'Mike', Password: '2020', Email: 'm@ft.com' },
    { Name: 'Beck', Password: '2121', Email: 'b@ft.com' },
];

export let CurrentUser = null;

export function Login(email, password) {
    const user = Users.find(x => x.Email == email);
    if(!user) throw Error('User not found');
    if(user.Password != password) throw Error('Wrong Password');
    
    return CurrentUser = user;
}