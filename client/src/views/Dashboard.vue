<template>
    <div class="dashboard">
        <p class="title">Welcome back, {{ welcomeBackUser }}</p>
        
        <section class="section">
            <div class="tile is-ancestor">
                
                <div class="tile is-4 is-parent">
                    <div class="tile is-child box">
                        
                        <div class="tile is-child box has-text-centered">
                            
                            <p class="subtitle"><b>My User Regiment</b></p>
                            <p>(connected to <b>'Admin'</b> via prop)</p>

                            <div class="newExercise">
                                <div class="tile is-child box" v-for="(x, index) in todos" v-bind:key="x.id">
                                    <div>{{ x.name }}</div>
                                    <div>{{ x.repsDuration }}</div>
                                    <div>{{ x.description }}</div>
                                    <div>{{ x.videoURL }}</div>
                                    <div class="buttons">
                                        <button class="button is-primary" @click="markAsCompleted(index)"><strong>Mark as Completed</strong></button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                
                <div class="tile is-4 is-parent">
                    <div class="tile is-child box">
                        <div class="tile is-child box">
                            <p class="subtitle"><b>Completed Exercises</b></p>
                            <p>(users adds info and posts to feed)</p>
                            
                            <div class="newExercise">
                                <div class="tile is-child box" v-for="y in todos2" v-bind:key="y.id">
                                <div>{{ y.name }}</div>
                                <div>{{ y.repsDuration }}</div>
                                <div>{{ y.description }}</div>
                                <div>{{ y.videoURL }}</div>
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
                
                <div class="tile is-4 is-parent">
                        <div class="tile is-child box">
                            <div class="tile is-child box">
                                <p class="subtitle"><b>Recent Activity</b></p>
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

            </div>
        </section>

    </div>
</template>

<script>
import { CurrentUser } from '../models/Users';

export default {
    data:() => ({
        
        newExercise: '',
        newRepsDuration: '',
        newDescription: '',
        newVideoURL: '',
        feedSuccess: false,
        welcomeBackUser: CurrentUser.Name,
        
        todos: [
            {
                name: 'Exercise',
                repsDuration: 'Reps/Duration',
                description: 'Description',
                videoURL: 'Video URL'
            }
        ],
        todos2: []
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
    #toptenpx {
        padding: 10px 0 0 0;
    }
</style>