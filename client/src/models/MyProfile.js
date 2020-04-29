import myFetch from "./myFetch";

export default { 
    State: {}, //myFetch is populating this JSON object
    Init(){
        myFetch('/myprofile')
            .then(x=> { 
                this.State = x;
                console.log(x);
            });
    }
}