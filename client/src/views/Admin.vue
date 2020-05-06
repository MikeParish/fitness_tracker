<template>
    <div class="admin">

        <section class="section background-img">
            
            <div class="tile is-ancestor notification background-img">
                
                <div class="tile is-vertical is-parent is-4">
                    
                    <div class="tile is-child box">
                        <section class="section">
                            
                            <i class="fas fa-biking fa-3x"></i>
                                <section class="section">
                                <p class="title">Admin Exercise Creator</p>

                                    <div class="field">
                                        <label class="label level-left">Exercise</label>
                                        <div class="control has-icons-left has-icons-right">
                                            <input  class="input is-primary" 
                                                    type="text" 
                                                    placeholder="Exercise" 
                                                    v-model="newExercise">
                                            <span class="icon is-small is-left">
                                                <i class="fas fa-biking"></i>
                                            </span>
                                            <p class="help is-dark padder-10-bottom">Enter the name of the exercise</p>
                                        </div>
                                    </div>

                                    <div class="field">
                                        <label class="label level-left">Reps/Duration</label>
                                        <div class="control has-icons-left has-icons-right">
                                            <input  class="input is-primary" 
                                                    type="text" 
                                                    placeholder="Sets or Amount" 
                                                    v-model="newRepsDuration">
                                            <span class="icon is-small is-left">
                                                <i class="fas fa-clipboard"></i>
                                            </span>
                                            <p class="help is-dark padder-10-bottom">Enter the reps or duration</p>
                                        </div>
                                    </div>

                                    <div class="field">
                                        <label class="label level-left">Description</label>
                                        <div class="control has-icons-left has-icons-right">
                                            <input  class="input is-primary" 
                                                    type="text" 
                                                    placeholder="Description" 
                                                    v-model="newDescription">
                                            <span class="icon is-small is-left">
                                                <i class="fas fa-pen"></i>
                                            </span>
                                            <p class="help is-dark padder-10-bottom">Enter a description for the user</p>
                                        </div>
                                    </div>

                                    <div class="field">
                                        <label class="label level-left">Video URL</label>
                                        <div class="control has-icons-left has-icons-right">
                                            <input  class="input is-primary" 
                                                    type="text" 
                                                    placeholder="https://youtube.com/biking" 
                                                    v-model="newVideoURL">
                                            <span class="icon is-small is-left">
                                                <i class="fas fa-video"></i>
                                            </span>
                                            <p class="help is-dark padder-10-bottom">Enter a video URL for the exercise demo</p>
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
                            <div class="tile is-child box" v-for="(x, index) in Exercises.State.Exers" v-bind:key="x.tname">
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
                            
                        <div class="tile is-child box" v-for="(y, index) in Exercises.State.Regiments" v-bind:key="y.tname">
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

    }),
    
    methods: {
        
        async create() {
            try {
                await Exercises.addExercise(this.newExercise, this.newRepsDuration, this.newDescription, this.newVideoURL);
            } catch (error) {
                this.error = error;
            }
        },

        clearFields() {
            this.newExercise = '';
            this.newRepsDuration = '';
            this.newDescription = '';
            this.newVideoURL = '';
        },

        async addToRegiment(index) {
            try {
                await Exercises.addRegiment(index)
            } catch (error) {
                this.error = error;
            }
        },
        
        async deleteThisFromRegiment(index) {
            try {
                await Exercises.deleteFromRegiment(index)
            } catch (error) {
                this.error = error;
            }
        },

        async deleteThisFromExercise(index) {
            try {
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