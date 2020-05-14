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

        <div>
            <!-- <section>
                <p class="content"><b>Selected:</b> {{ selected }}</p>
                <b-field label="Find a JS framework">
                    <b-autocomplete
                        rounded
                        v-model="name"
                        :data="filteredDataArray"
                        placeholder="e.g. jQuery"
                        icon="magnify"
                        clearable
                        @select="option => selected = option">
                        <template slot="empty">No results found</template>
                    </b-autocomplete>
                </b-field>
            </section> -->
            <section>
                <p class="content"><b>Selected:</b> {{ selected }}</p>
                <b-field label="Find an exercise">
                    <b-autocomplete
                        :data="data"
                        placeholder="e.g. Running"
                        field="title"
                        :loading="isFetching"
                        @typing="getAutoExerz"
                        @select="option => selected = option">

                        <!-- <template slot-scope="props">
                            <div class="media">
                                <div class="media-left">
                                    <img width="32" :src="`https://image.tmdb.org/t/p/w500/${props.option.poster_path}`">
                                </div>
                                <div class="media-content">
                                    {{ props.option.title }}
                                    <br>
                                    <small>
                                        Released at {{ props.option.release_date }},
                                        rated <b>{{ props.option.vote_average }}</b>
                                    </small>
                                </div>
                            </div>
                        </template> -->
                    </b-autocomplete>
                </b-field>
            </section>
        
        </div>

    </div>
</template>

<script>
import Exercises from "../models/Exercises";
import debounce from "lodash/debounce"

export default {
    data:() => ({
        
        Exercises,
        newExercise: '',
        newRepsDuration: '',
        newDescription: '',
        newVideoURL: '',
        
        data: [],
        selected: null,
        isFetching: false

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

        async getAutoExerz(name) {
            try {
                await Exercises.getAutoExer(name)
            } catch {
                this.error = error;
            } finally {
                this.isFetching = false
            }
        },

        //async filteredDataArray() {},
                //try {
                //    await 
                    
                    /*return this.data.filter((option) => {
                    return option
                        .toString()
                        .toLowerCase()
                        .indexOf(this.name.toLowerCase()) >= 0
                    }
                } catch (error) {
                this.error = error; */
                //}
        //}
        // You have to install and import debounce to use it,
            // it's not mandatory though.
            
    //computed: {
    //        filteredDataArray() {
    //            return this.data.filter((option) => {
    //                return option
    //                    .toString()
    //                    .toLowerCase()
    //                    .indexOf(this.name.toLowerCase()) >= 0
    //            })
    //        }
    //},

        getAsyncData: debounce(function (name) {
                    if (!name.length) {
                        this.data = []
                        return
                    }
                    this.isFetching = true
                    this.$http.get(`https://api.themoviedb.org/3/search/movie?api_key=bb6f51bef07465653c3e553d6ab161a8&query=${name}`)
                        .then(({ data }) => {
                            this.data = []
                            data.results.forEach((item) => this.data.push(item))
                        })
                        .catch((error) => {
                            this.data = []
                            throw error
                        })
                        .finally(() => {
                            this.isFetching = false
                        })
                }, 500)
    },

    created() {
        Exercises.Init() //when page is loaded, init is executed (init is myFetch)
    },

}
</script>

<style>
</style>