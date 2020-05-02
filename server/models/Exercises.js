const Exercises = [
    {
        tname: 'testExercise',
        repsDuration: 'Reps/Duration',
        description: 'Description',
        videoURL: 'Video URL'
    }
];

const Regiments = [];

module.exports = {
    Exercises,
    Regiments,
    addExercise(tname, repsDuration, description, videoURL) { //this works too
        Exercises.push({tname, repsDuration, description, videoURL});
        return true;
    },
    /*addRegiment(tname, repsDuration, description, videoURL) { //this works too
        Regiments.push({tname, repsDuration, description, videoURL});
        return true;
    },*/
    addRegiment(index) {
        const exercise = Exercises[index];
        Regiments.push(exercise);
        return true;
    },
    deleteFromRegiment(index) {
        //const exercise = Regiments[index];
        Regiments.splice(index, 1);
        return true;
    }
}