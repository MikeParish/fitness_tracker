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
}