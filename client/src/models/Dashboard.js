import myFetch from "./myFetch";

export default { 
    State: {},                  //myFetch is populating this JSON object
    Init(){
        myFetch('/dashboard')   //url no data, get request localhost:3000/dashboard
            .then(x => { 
                this.State = x; 
                console.log(x);
            });
                                //data on server now mirrors data on client in the object state
    },
    async addCompleted(index) {
        await myFetch('/exercises/addcompleted', {index}); 
        //post request - url, body
        return true;
    },
    async addUserCompleted(index, userRepsDuration, userNotes) {
        await myFetch('/exercises/addusercompleted', {index, userRepsDuration, userNotes}); 
        //post request - url, body 
        return true;
    },
    async feedPusher(index) {   //userId is bearer token myFetch only needs body parameter here, userId is used in controller
        await myFetch('/exercises/feedpusher', {index}); 
        //post request - url, body
        return true;
    },
}