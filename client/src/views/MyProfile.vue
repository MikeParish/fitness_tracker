<template>
    <div class="myprofile">
        
        <section class="section">
            <div class="tile is-ancestor notification">
                
                <div class="tile is-4 is-parent">
                    <div class="tile is-child box">
                        
                            <p class="title"><b>User Profile</b></p>

                            <div class="user-profile">
                                <figure id="centerer" class="image is-128x128">
                                    <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
                                </figure>
                                <p class="title">{{ userProfileName }}</p>
                                <p class="subtitle">New Paltz, NY</p>
                                <div>
                                    <p>I'm hoping to run a 5k this fall</p>
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
                            <p>(connected to <b>'Dashboard'</b> via prop)</p>

                            <div class="newExercise">
                                <div class="tile is-child box" v-for="x in todos2" v-bind:key="x.id">
                                <div>{{ x.name }}</div>
                                <div>{{ x.repsDuration }}</div>
                                <div>{{ x.description }}</div>
                                <div>{{ x.videoURL }}</div>
                                <div class="field">
                                    <label class="label" id="toptenpx">Your Reps/Duration</label>
                                    <div class="control has-icons-left has-icons-right">
                                        <input class="input is-primary" type="text" placeholder="Your Reps/Duration" v-model="userRepsDuration">
                                        <span class="icon is-small is-left">
                                            <i class="fas fa-clipboard"></i>
                                        </span>
                                        <p class="help is-dark">Enter your reps/duration</p>
                                    </div>
                                </div>
                                <div class="field">
                                    <label class="label" id="notes">Additional Notes</label>
                                    <div class="control has-icons-left has-icons-right">
                                        <textarea class="textarea is-primary" placeholder="Your Notes" v-model="userNotes"></textarea>
                                        <p class="help is-dark">Enter your notes</p>
                                    </div>
                                </div>
                                
                                <div class="buttons">
                                    <button class="button is-primary" v-on:click="feedSuccess = !feedSuccess"><strong>Post to Feed</strong></button>
                                    <button class="button is-primary is-light"><strong>Save</strong></button>
                                    <p v-show="feedSuccess"><strong>Posted to your profile activity feed!</strong></p>
                                </div>
                                </div>
                            </div>     

                    </div>
                </div>  

            </div>
        </section>

    </div>
</template>

<script>
import { CurrentUser } from "../models/Users";

export default {
    data:() => ({

        userProfileName: CurrentUser.Name,
    }),
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