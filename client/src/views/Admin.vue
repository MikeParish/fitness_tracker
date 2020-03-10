<template>
    <div class="admin">

        <section class="section">
            <div class="tile is-ancestor">
                <div class="tile is-vertical is-parent is-4">
                    
                    <div class="tile is-child box">
                        <section class="section">
                            
                            <div class="tile is-child box">
                            <i class="fas fa-biking fa-3x"></i>
                            <section class="section">
                                <p class="title">Admin Exercise Creator</p>

                                    <div class="field">
                                        <label class="label">Exercise</label>
                                        <div class="control has-icons-left has-icons-right">
                                            <input class="input" type="text" placeholder="Exercise" v-model="newExercise">
                                            <span class="icon is-small is-left">
                                            <i class="fas fa-biking"></i>
                                            </span>
                                            <p class="help is-dark">Enter the name of exercise</p>
                                        </div>
                                    </div>

                                    <div class="field">
                                        <label class="label">Reps/Duration</label>
                                        <div class="control has-icons-left has-icons-right">
                                            <input class="input" type="text" placeholder="Sets or Amount" v-model="newRepsDuration">
                                            <span class="icon is-small is-left">
                                                <i class="fas fa-clipboard"></i>
                                            </span>
                                            <p class="help is-dark">Enter the reps or duration</p>
                                        </div>
                                    </div>

                                    <div class="field">
                                        <label class="label">Description</label>
                                        <div class="control has-icons-left has-icons-right">
                                            <input class="input" type="text" placeholder="Description" v-model="newDescription">
                                            <span class="icon is-small is-left">
                                                <i class="fas fa-pen"></i>
                                            </span>
                                            <p class="help is-dark">Enter a description for the user</p>
                                        </div>
                                    </div>

                                    <div class="field">
                                        <label class="label">Video URL</label>
                                        <div class="control has-icons-left has-icons-right">
                                            <input class="input" type="text" placeholder="https://youtube.com/biking" v-model="newVideoURL">
                                            <span class="icon is-small is-left">
                                            <i class="fas fa-video"></i>
                                            </span>
                                            <p class="help is-dark">Enter a video URL for the exercise demo</p>
                                        </div>
                                    </div>

                                    <div class="field is-grouped">
                                        <div class="control">
                                            <button class="button is-primary" @click="create"><strong>Create</strong></button>
                                        </div>
                                        <div class="control">
                                            <button class="button is-danger is-light">Clear</button>
                                        </div>
                                    </div> 
                            </section>
                            </div>
                        </section>
                    </div>
                        
                </div>
                
                <div class="tile is-4 is-parent">
                    <div class="tile is-child box">
                        <div class="tile is-child box">
                            <p class="subtitle"><b>Created User Exercises</b></p>
                            <p>(admin creates and adds to regiment)</p>
                            
                            <div class="newExercise">
                                <div class="tile is-child box" v-for="(x, index) in todos" v-bind:key="x.id">
                                    <div>{{ x.name }}</div>
                                    <div>{{ x.repsDuration }}</div>
                                    <div>{{ x.description }}</div>
                                    <div>{{ x.videoURL }}</div>
                                    <button class="button is-primary" @click="addToRegiment(index)"><strong>Add to Regiment</strong></button>
                                    <button class="button is-danger is-light" @click="deleteThisExercise(index)">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="tile is-4 is-parent">
                    <div class="tile is-child box">
                        <div class="tile is-child box has-text-centered">
                            <p class="subtitle"><b>User Regiment</b></p>
                            <p>(connected to <b>'Dashboard'</b> via prop)</p>
                            <div class="tile is-child box" v-for="(y, index) in todos2" v-bind:key="y.id">
                                <div>{{ y.name }}</div>
                                <div>{{ y.repsDuration }}</div>
                                <div>{{ y.description }}</div>
                                <div>{{ y.videoURL }}</div>
                                <button class="button is-danger" @click="deleteThisFromRegiment(index)"><strong>Delete from Regiment</strong></button>
                            </div>
                            <div class="control">
                                <button class="button is-primary" v-on:click="regimentSuccess = !regimentSuccess"><strong>Send Regiment to User</strong></button>
                                <p v-show="regimentSuccess"><strong>Regiment sent to user successfully!</strong></p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data:() => ({
        newExercise: '',
        newRepsDuration: '',
        newDescription: '',
        newVideoURL: '',
        regimentSuccess: false,
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
        addToRegiment(x) {
            this.todos2.push(this.todos[x]);
        },
        deleteThisFromRegiment(x) {
            this.todos2.splice(x, 1);
        }
    }
}
</script>

<style>
</style>