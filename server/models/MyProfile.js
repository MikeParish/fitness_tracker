const MyProfile = [
    {
        UserID: 0,
        Name: 'Admin',
        ProfileImage: 'http://cs.newpaltz.edu/~parishm1/pics/admin.png',
        Location: 'Los Angeles, CA, US',
        Goal: 'I want to pump you up'
    },
    {
        UserID: 1,
        Name: 'Mike',
        ProfileImage: 'http://cs.newpaltz.edu/~parishm1/pics/mike.png',
        Location: 'New Paltz, NY, US',
        Goal: 'I want to walk 10,000 steps per day'
    },
    {
        UserID: 2,
        Name: 'Beck',
        ProfileImage: 'http://cs.newpaltz.edu/~parishm1/pics/beck.png',
        Location: 'New Paltz, NY, US',
        Goal: 'I want to jump around a lot'
    }
];

function Get(userid) {
    const currentuser = Profile.find(x=> x.UserID == userid)
    return currentuser.UserID;
}

module.exports = {
    MyProfile,
    Get
}