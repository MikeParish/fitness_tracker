<template>
    <div class="myprofile">
        
        <section class="section background-img">
            <div class="tile is-ancestor notification background-img">
                
                <div class="tile is-4 is-parent">
                    <div class="tile is-child box">
                        
                            <p class="title"><b>User Profile</b></p>

                            <div class="user-profile">
                                <figure id="centerer" class="image is-128x128">
                                    <img class="is-rounded" v-bind:src="userImage">
                                </figure>
                                <div class="profile-padder">
                                    <p class="title">{{ userName }}</p>
                                </div>
                                <div>
                                    <p class="subtitle">{{ userLocation }}</p>
                                </div>
                                <div>
                                <div class="profile-padder">
                                    <p>"{{ userGoal }}"</p>
                                </div>
                                    <button class="button is-primary" @click="openModal">Edit Profile</button>
                                    
                                    <div class="modal" v-bind:class="{'is-active': openModalTrig}">
                                        
                                        <div class="modal-background"></div>
                                            
                                            <div class="modal-card">
                                                
                                                <header class="modal-card-head">
                                                <p class="modal-card-title">Edit Profile</p>
                                                <button class="delete" aria-label="close" @click="closeModal"></button>
                                                </header>
                                                
                                                <section class="modal-card-body">

                                                    <div class="field">
                                                        <label class="label level-left">Name</label>
                                                        <div class="control">
                                                            <input class="input" 
                                                                   type="text" 
                                                                   placeholder="e.g. Arnold" 
                                                                   v-model="userNameEdit">
                                                        </div>
                                                    </div>

                                                    <div class="field">
                                                        <label class="label level-left">Location</label>
                                                        <div class="control">
                                                            <input class="input" 
                                                                   type="text" 
                                                                   placeholder="e.g. City, State, Country" 
                                                                   v-model="userLocEdit">
                                                        </div>
                                                    </div>

                                                    <div class="field">
                                                        <label class="label level-left">Goal</label>
                                                        <div class="control">
                                                            <input class="input" 
                                                                   type="email" 
                                                                   placeholder="e.g. I want to run a marathon" 
                                                                   v-model="userGoalEdit">
                                                        </div>
                                                    </div>
                                                </section>

                                                <footer class="modal-card-foot">
                                                <button class="button is-primary" @click="closeModal(); userProfEditTrig()">Save changes</button>
                                                <button class="button" @click="closeModal">Cancel</button>
                                                </footer>

                                            </div>
                                        </div>
                                </div>
                                <div class="profile-button-padder"></div>
                            </div>

                    </div>
                </div>

                <div class="tile is-8 is-parent">
                    <div class="tile is-child box">
                        <p class="title"><b>FitnessTracker Feed</b></p>
                            <!--<p>Complete an exercise to add it to the feed!</p>-->

                        <article class="media" v-for="x in Dashboard.State.Feed" v-bind:key="x.tname">
                            
                            
                            <figure class="media-left">
                                <p class="image is-64x64">
                                <img v-bind:src="x.profileImage">
                                </p>
                            </figure>
                            
                            <div class="media-content">
                                
                                <div class="content">
                                    <p>
                                    <strong>{{ x.name }}</strong> completed {{ x.userRepsDuration }} of <strong>{{ x.tname }}</strong> 
                                    {{ x.description }}
                                    {{x.name}} said "{{ x.userNotes }}"
                                    </p>
                                </div>
                                
                                <nav class="level is-mobile">
                                <div class="level-left">
                                    <a class="level-item">
                                    <span class="icon is-small"><i class="fas fa-reply"></i></span>
                                    </a>
                                    <a class="level-item">
                                    <span class="icon is-small"><i class="fas fa-retweet"></i></span>
                                    </a>
                                    <a class="level-item">
                                    <span class="icon is-small"><i class="fas fa-heart"></i></span>
                                    </a>
                                </div>
                                </nav>
                            
                            </div>
                        
                        </article>
                            
                            <!--<p class="title"><b>FitnessTracker Feed</b></p>
                            <p>Complete an exercise to add it to the feed!</p>
                            <div class="newExercise">
                                <div class="tile is-child box" v-for="x in Dashboard.State.Feed" v-bind:key="x.tname">
                                    <div>{{ x.tname }}</div>
                                    <div>{{ x.repsDuration }}</div>
                                    <div>{{ x.userRepsDuration }}</div>
                                    <div>{{ x.description }}</div>
                                    <div>{{ x.videoURL }}</div>
                                    <div>{{ x.userNotes }}</div>
                                </div>
                            </div>-->

                    </div>
                </div> 
                 

            </div>
        </section>

    </div>
</template>

<script>
import { CurrentUser } from "../models/Users";
import MyProfile from "../models/MyProfile";
import Dashboard from "../models/Dashboard";

export default {
    data:() => ({
        
        MyProfile,
        Dashboard,
        
        userName: MyProfile.State.MyProf.Name,
        userLocation: MyProfile.State.MyProf.Location,
        userImage: MyProfile.State.MyProf.ProfileImage,
        userGoal: MyProfile.State.MyProf.Goal,

        openModalTrig: false,

        userNameEdit: '',
        userLocEdit: '',
        userGoalEdit: ''

    }),
    
    methods: {

        openModal() {
            this.openModalTrig = true;
        },
            
        closeModal() {
            this.openModalTrig = false;
        },

        async userProfEditTrig() {
            try {
                await MyProfile.userProfEdit(this.userNameEdit, this.userLocEdit, this.userGoalEdit)
            } catch (error) {
                this.error = error;
            }
        }

    },

    created() {
        MyProfile.Init()
    }
}
</script>

<style>
    
    #centerer {
        margin: auto;
    }

    .profile-padder {
        padding: 20px 10px;
    }
    .profile-button-padder {
        padding-bottom: 30px;
    }

</style>