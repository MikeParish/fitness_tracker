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
                                            <input class="input" type="text" placeholder="Exercise" v-model="newEx">
                                            <span class="icon is-small is-left">
                                            <i class="fas fa-biking"></i>
                                            </span>
                                            <p class="help is-dark">Enter the name of exercise</p>
                                        </div>
                                    </div>

                                    <div class="field">
                                        <label class="label">Reps/Duration</label>
                                        <div class="control has-icons-left has-icons-right">
                                            <input class="input" type="number" placeholder="0" v-model="newRepsDur">
                                            <span class="icon is-small is-left">
                                                <i class="fas fa-clipboard"></i>
                                            </span>
                                            <p class="help is-dark">Enter the reps or duration</p>
                                        </div>
                                    </div>

                                    <div class="field">
                                        <label class="label">Description</label>
                                        <div class="control has-icons-left has-icons-right">
                                            <input class="input" type="text" placeholder="Description" v-model="newDes">
                                            <span class="icon is-small is-left">
                                                <i class="fas fa-pen"></i>
                                            </span>
                                            <p class="help is-dark">Enter a description for the user</p>
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
                            
                            <div class="newExercise">
                                <div class="tile is-child box" v-for="(x, index) in todos" v-bind:key="x.id">
                                    <div>{{ x.name }}</div>
                                    <div>{{ x.repsDur }}</div>
                                    <div>{{ x.des }}</div>
                                    <button class="button is-primary" @click="addToRegiment(index)"><strong>Add to Regiment</strong></button>
                                    <button class="button is-danger is-light" @click="deleteThis(index)">Delete</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                
                <div class="tile is-4 is-parent">
                    <div class="tile is-child box">
                        <div class="tile is-child box">
                            <p class="subtitle"><b>User Regiment</b></p>
                            <div class="tile is-child box" v-for="(y, index) in todos2" v-bind:key="y.id">
                            <div>{{ y.name }}</div>
                            <div>{{ y.repsDur }}</div>
                            <div>{{ y.des }}</div>
                            <!--<button class="button is-primary" @click="addToRegiment(index)"><strong>Add to Regiment</strong></button> -->
                            <button class="button is-danger is-light" @click="deleteThis(index)">Delete</button>
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
        newEx: '',
        newRepsDur: '',
        newDes: '',
        todos: [
            {
                name: 'Exercise Name',
                repsDur: 0,
                des: 'Description',
            }
        ],
        todos2: []
    }),
    methods: {
        create() {
            this.todos.push(
              { 
                name: this.newEx, 
                repsDur: this.newRepsDur, 
                des: this.newDes
              })
        },
        deleteThis(x) {
            this.todos.splice(x, 1);
        },
        addToRegiment(x) {
            this.todos2.push(this.todos[x]);
        },
        createExArray() {(
                {

                })
        }
    }
}
</script>

<style>
</style>