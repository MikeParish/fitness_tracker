import myFetch from "./myFetch";

export default { 
    State: {},                  //myFetch is populating this JSON object
    Init(){
        myFetch('/exercises')   //get request - url, no data - localhost:3000/exercises
            .then(x => { 
                this.State = x; 
                console.log(x);
            });                 //data on server now mirrors data on client in the object state
    },
    async addExercise(tname, repsDuration, description, videoURL) {
        await myFetch('/exercises/addexercises', {tname, repsDuration, description, videoURL}); 
        //post request - url, body 
        return true;
    },
    async addRegiment(index) {
        await myFetch('/exercises/addregiments', {index}); 
        //post request - url, body
        return true;
    },
    async deleteFromRegiment(index) {
        await myFetch('/exercises/deletefromregiments', {index}); 
        //post request - url, body
        return true;
    },
    async deleteFromExercise(index) {
        await myFetch('/exercises/deletefromexercises', {index}); 
        //post request - url, body
        return true;
    },
}