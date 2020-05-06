<template>
    <div class="dashboard">
        
        <section class="section background-img">
            
            <div class="tile is-ancestor notification background-img">
                
                <div class="tile is-4 is-parent">
                    <div class="tile is-child box">
                            
                        <p class="title"><b>My User Regiment</b></p>

                        <div class="newExercise">
                            <div class="tile is-child box" v-for="(x, index) in Dashboard.State.Regiments" v-bind:key="x.tname">
                                <div>{{ x.tname }}</div>
                                <div>{{ x.repsDuration }}</div>
                                <div>{{ x.description }}</div>
                                <div>{{ x.videoURL }}</div>
                                <div class="buttons">
                                    <button class="button is-primary" 
                                            @click="addToCompleted(index)"><strong>Mark as Completed</strong></button>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                
                <div class="tile is-4 is-parent">
                    <div class="tile is-child box">
                        <p class="title"><b>My Completed Exercises</b></p>
                            
                        <div class="newExercise">
                            <div class="tile is-child box" v-for="(y, index) in Dashboard.State.Completed" v-bind:key="y.tname">
                                <!--y is each object in the array, index is which object-->
                            <div>{{ y.tname }}</div>
                            <div>{{ y.repsDuration }}</div>
                            <div>{{ y.description }}</div>
                            <div>{{ y.videoURL }}</div>
                            <div class="field">
                                <label class="label" id="toptenpx">Your Reps/Duration</label>
                                <div class="control has-icons-left has-icons-right">
                                    <input  class="input is-primary" 
                                            type="text"
                                            placeholder="Enter your reps/duration"                                       
                                            v-model="userRepsDuration">
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-clipboard"></i>
                                    </span>
                                    <p class="help is-dark">Enter your reps/duration</p>
                                </div>
                            </div>
                                
                            <div class="field">
                                <label class="label" id="notes">Additional Notes</label>
                                <div class="control has-icons-left has-icons-right">
                                    <textarea class="textarea is-primary" 
                                              placeholder="Your Notes" 
                                              v-model="userNotes"></textarea>
                                    <p class="help is-dark">Enter your notes</p>
                                </div>
                            </div>
                                
                            <div class="buttons">
                                <button class="button is-primary" 
                                        @click="userCompleted(index), addToFeed(index)"><strong>Post to Feed</strong></button>
                                <button class="button is-primary is-light"><strong>Save</strong></button>
                                <p v-show="feedSuccess"><strong>Posted to FitnessTracker Feed!</strong></p>
                            </div>
                            </div>
                        </div>

                    </div>
                </div>
                
                <div class="tile is-4 is-parent">
                    <div class="tile is-child box">
                        <p class="title"><b>Welcome back, {{ welcomeBackUser }}</b></p>
                        <p class="subtitle"><b>My Saved Exercises</b></p>
                        <p class="has-text-weight-bold">Lorem ipsum dolor sit amet</p> 
                        <p>Consectetur adipiscing elit</p> 
                        <p class="has-text-weight-bold">Etiam semper diam at erat pulvinar</p> 
                        <p>At pulvinar felis blandit</p> 
                        <p class="has-text-weight-bold">Vestibulum volutpat tellus diam</p> 
                        <p>Consequat gravida libero rhoncus ut</p> 
                        <p class="has-text-weight-bold">Morbi maximus, leo sit amet vehicula</p> 
                        <p>Eleifend nunc dui porta orci quis</p>
                    </div>
                </div>

            </div>
        </section>

    </div>
</template>

<script>
import { CurrentUser } from '../models/Users';
import Dashboard from "../models/Dashboard";

export default {
    data:() => ({
        
        Dashboard,
        
        userRepsDuration: '',
        userNotes: '',

        feedSuccess: false,
        welcomeBackUser: CurrentUser.Name
        
    }),
    methods: {

        async userCompleted(index) {
            try {
                await Dashboard.addUserCompleted(index, this.userRepsDuration, this.userNotes); 
                //index is parameter, others are v-models declared in data
            } catch (error) {
                this.error = error;
            }
        },

        async addToCompleted(index) {
            try {
                await Dashboard.addCompleted(index)
            } catch (error) {
                this.error = error;
            }
        },

        async addToFeed(index) {
            try {
                await Dashboard.feedPusher(index)
            } catch (error) {
                this.error = error;
            }
        },

    },
    
    created() {
        Dashboard.Init()
    }

}
</script>

<style>
    #toptenpx {
        padding: 10px 0 0 0;
    }
</style>