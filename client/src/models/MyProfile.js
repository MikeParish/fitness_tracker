import myFetch from "./myFetch";

export default { 
    State: {}, //myFetch is populating this JSON object
    Init(){
        myFetch('/myprofile')
            .then(x=> { 
                this.State = x;
                console.log(x);
            });
    },
    async userProfEdit(userNameEdit, userLocEdit, userGoalEdit) {
        await myFetch('/myprofile/profileedit', {userNameEdit, userLocEdit, userGoalEdit}); 
        //post request - url, body
        return true;
    },
}