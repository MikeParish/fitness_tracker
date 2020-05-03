<template>
    <div class="admin">

        <section class="section">
            <div class="tile is-ancestor notification">
                <div class="tile is-vertical is-parent is-4">
                    
                    <div class="tile is-child box">
                        <section class="section">
                            
                            <i class="fas fa-biking fa-3x"></i>
                                <section class="section">
                                <p class="title">Admin Exercise Creator</p>

                                    <div class="field">
                                        <label class="label">Exercise</label>
                                        <div class="control has-icons-left has-icons-right">
                                            <input  class="input is-primary" type="text" 
                                                    placeholder="Exercise" v-model="newExercise">
                                            <span class="icon is-small is-left">
                                                <i class="fas fa-biking"></i>
                                            </span>
                                            <p class="help is-dark">Enter the name of exercise</p>
                                        </div>
                                    </div>

                                    <div class="field">
                                        <label class="label">Reps/Duration</label>
                                        <div class="control has-icons-left has-icons-right">
                                            <input  class="input is-primary" type="text" 
                                                    placeholder="Sets or Amount" v-model="newRepsDuration">
                                            <span class="icon is-small is-left">
                                                <i class="fas fa-clipboard"></i>
                                            </span>
                                            <p class="help is-dark">Enter the reps or duration</p>
                                        </div>
                                    </div>

                                    <div class="field">
                                        <label class="label">Description</label>
                                        <div class="control has-icons-left has-icons-right">
                                            <input  class="input is-primary" type="text" 
                                                    placeholder="Description" v-model="newDescription">
                                            <span class="icon is-small is-left">
                                                <i class="fas fa-pen"></i>
                                            </span>
                                            <p class="help is-dark">Enter a description for the user</p>
                                        </div>
                                    </div>

                                    <div class="field">
                                        <label class="label">Video URL</label>
                                        <div class="control has-icons-left has-icons-right">
                                            <input  class="input is-primary" type="text" 
                                                    placeholder="https://youtube.com/biking" v-model="newVideoURL">
                                            <span class="icon is-small is-left">
                                                <i class="fas fa-video"></i>
                                            </span>
                                            <p class="help is-dark">Enter a video URL for the exercise demo</p>
                                        </div>
                                    </div>

                                    <div class="field is-grouped">                                  
                                        <div class="control">
                                            <button class="button is-primary" @click="create()"><strong>Create</strong></button>
                                        </div>
                                        <div class="control">
                                            <button class="button is-danger is-light" @click="clearFields()">Clear</button>
                                        </div>
                                    </div>

                                </section>
                            
                        </section>
                    </div>
                        
                </div>
                
                <div class="tile is-4 is-parent">
                    <div class="tile is-child box">
                        
                        <p class="title"><b>Created User Exercises</b></p>

                        <div class="newExercise">
                            <div class="tile is-child box" v-for="(x, index) in Exercises.State.Exers" v-bind:key="x.id">
                                <div>{{ x.tname }}</div>
                                <div>{{ x.repsDuration }}</div>
                                <div>{{ x.description }}</div>
                                <div>{{ x.videoURL }}</div>
                                <div class="buttons">
                                    <button class="button is-primary" @click="addToRegiment(index)"><strong>Add to Regiment</strong></button>
                                    <button class="button is-danger is-light" @click="deleteThisFromExercise(index)">Delete</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                
                <div class="tile is-4 is-parent">
                    <div class="tile is-child box">
                        
                        <p class="title"><b>User Regiment</b></p>
                            
                        <div class="tile is-child box" v-for="(y, index) in Exercises.State.Regiments" v-bind:key="y.id">
                            <div>{{ y.tname }}</div>
                            <div>{{ y.repsDuration }}</div>
                            <div>{{ y.description }}</div>
                            <div>{{ y.videoURL }}</div>
                            <button class="button is-danger" @click="deleteThisFromRegiment(index)"><strong>Delete from Regiment</strong></button>
                        </div>
                        
                    </div>

                </div>

            </div>
        </section>

    </div>
</template>

<script>
import Exercises from "../models/Exercises";

export default {
    data:() => ({
        
        Exercises,
        newExercise: '',
        newRepsDuration: '',
        newDescription: '',
        newVideoURL: '',
        
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
        
        async create() {
            try {
                //console.log("anything")
                await Exercises.addExercise(this.newExercise, this.newRepsDuration, this.newDescription, this.newVideoURL);
                //Exercise.State.Exercise.splice(index, 1);
            } catch (error) {
                this.error = error;
            }
            
            /*this.todos.push(
              { 
                name: this.newExercise, 
                repsDuration: this.newRepsDuration, 
                description: this.newDescription,
                videoURL: this.newVideoURL,
              })
            // addExercise(this.newExercise, this.newRepsDuration, this.newDescription, this.newVideoURL)*/
        },

        clearFields() {
            this.newExercise = '';
            this.newRepsDuration = '';
            this.newDescription = '';
            this.newVideoURL = '';
        },

        async addToRegiment(index) {
            //this.todos2.push(this.todos[x]);
            try {
                //console.log("anything2")
                await Exercises.addRegiment(index)
            } catch (error) {
                this.error = error;
            }
        },
        
        async deleteThisFromRegiment(index) {
            //this.todos2.splice(x, 1);
            try {
                //console.log("anything3")
                await Exercises.deleteFromRegiment(index)
            } catch (error) {
                this.error = error;
            }
        },

        async deleteThisFromExercise(index) {
            //this.todos.splice(x, 1);
            try {
                //console.log("anything4")
                await Exercises.deleteFromExercise(index)
            } catch (error) {
                this.error = error;
            }
        },
          
    },
    created() {
        Exercises.Init() //when page is loaded, init is executed (init is myFetch)
    }
}
</script>

<style>
</style>