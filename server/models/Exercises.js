const Exercises = [
    {
        tname: 'testExercise',
        repsDuration: 'Reps/Duration',
        description: 'Description',
        videoURL: 'Video URL'
    }
];

const Regiments = [];

const Completed = [];

module.exports = {
    Exercises,
    Regiments,
    Completed,
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
        console.log(userCompleted);
        return true;
    },
}