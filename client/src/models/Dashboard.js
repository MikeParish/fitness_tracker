import myFetch from "./myFetch";

export default { 
    State: {}, //myFetch is populating this JSON object
    Init(){
        myFetch('/dashboard') //url no data, get request localhost3000/exercises
            .then(x => { 
                this.State = x; 
                console.log(x);
            }); //data on server now mirrors data on client in the object state
    }
}