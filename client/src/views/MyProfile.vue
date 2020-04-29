<template>
    <div class="myprofile">
        
        <section class="section">
            <div class="tile is-ancestor notification">
                
                <div class="tile is-4 is-parent">
                    <div class="tile is-child box">
                        
                            <p class="subtitle"><b>User Profile</b></p>

                            <div class="user-profile">
                                <figure id="centerer" class="image is-128x128">
                                    <img class="is-rounded" v-bind:src="userImage">
                                </figure>
                                <p class="title">{{ userName }}</p>
                                <p class="subtitle">{{ userLocation }}</p>
                                <div>
                                    <p>"{{ userGoal }}"</p>
                                    <div class="field">
                                        <div class="control">
                                            <textarea class="textarea is-primary" placeholder="My favorite fitness activities include walking and swimming"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>

                    </div>
                </div>

                <div class="tile is-8 is-parent">
                    <div class="tile is-child box">
                            
                            <p class="title"><b>Feed</b></p>  

                    </div>
                </div>  

            </div>
        </section>

    </div>
</template>

<script>
import { CurrentUser } from "../models/Users";
import MyProfile from "../models/MyProfile";

export default {
    data:() => ({
        MyProfile,
        userName: MyProfile.State.MyProf.Name,
        userLocation: MyProfile.State.MyProf.Location,
        userImage: MyProfile.State.MyProf.ProfileImage,
        userGoal: MyProfile.State.MyProf.Goal,
    }),
    created() {
        MyProfile.Init()
    },
    methods: {
        
        create() {
            this.todos.push(
              { 
                name: this.newExercise, 
                repsDuration: this.newRepsDuration, 
                description: this.newDescription,
                videoURL: this.newVideoURL,
              })
        },
        
        deleteThisExercise(x) {
            this.todos.splice(x, 1);
        },
        
        markAsCompleted(x) {
            this.todos2.push(this.todos[x]);
        },
        
        deleteThisFromRegiment(x) {
            this.todos2.splice(x, 1);
        },
    }
}
</script>

<style>
    #centerer {
        margin: auto;
    }

    #whiteTile {
        background-color: white;
    }
</style>