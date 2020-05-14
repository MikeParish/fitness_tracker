const myprofile = require("./MyProfile");

const Exercises = [
    {
        tname: 'testExercise',
        repsDuration: 'Reps/Duration',
        description: 'Description',
        videoURL: 'Video URL'
    }
];

const Regiments = [];

const Completed = [
    {
        tname: 'testExercise',
        repsDuration: 'Reps/Duration',
        description: 'Description',
        videoURL: 'Video URL',
        userRepsDuration: '20',
        userNotes: 'hey'
    }
];

const Feed = [];

const AutoExercises = [
    {
        exname: 'Running'
    },
    {
        exname: 'Swimming'
    },
    {   
        exname: 'Walking'
    },
    { 
        exname: 'Push-ups'
    },
    {    
        exname: 'Archery'
    }
];

module.exports = {
    Exercises,
    Regiments,
    Completed,
    Feed,
    AutoExercises,
    addExercise(tname, repsDuration, description, videoURL) {
        Exercises.push({tname, repsDuration, description, videoURL});
        return true;
    },
    addRegiment(index) {
        const exercise = Exercises[index];
        Regiments.push(exercise);
        return true;
    },
    deleteFromRegiment(index) {
        Regiments.splice(index, 1);
        return true;
    },
    deleteFromExercise(index) {
        Exercises.splice(index, 1);
        return true;
    },
    addCompleted(index) {
        const completed = Regiments[index];
        Completed.push(completed);
        return true;
    },
    addUserCompleted(index, userRepsDuration, userNotes) {
        const userCompleted = Completed[index];                 //getting the object via index
        userCompleted['userRepsDuration'] = userRepsDuration;   //adding new properties to object
        userCompleted['userNotes'] = userNotes;
        return true;
    },
    feedPusher(userid, index) {                                 //userid is bearer token
        const user = myprofile.MyProfile.find(x=> x.UserID == userid);
        const userCompletedForFeed = Completed[index];
        Feed.push(userCompletedForFeed);
        const feedItem = Feed.find(x=> x.tname == userCompletedForFeed.tname);
        feedItem['name'] = user.Name;   //adding new properties to object
        feedItem['profileImage'] = user.ProfileImage;
        return true;
    },
    getAutoExercise(exname) {
        const neededEx = AutoExercises.find(x=> x.exname == exname);
        return true;
    }
}