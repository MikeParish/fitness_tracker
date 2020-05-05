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
                                                            <input class="input" type="text" placeholder="e.g. Arnold" v-model="userNameEdit">
                                                        </div>
                                                    </div>

                                                    <div class="field">
                                                        <label class="label level-left">Location</label>
                                                        <div class="control">
                                                            <input class="input" type="text" placeholder="e.g. City, State, Country" v-model="userLocEdit">
                                                        </div>
                                                    </div>

                                                    <div class="field">
                                                        <label class="label level-left">Goal</label>
                                                        <div class="control">
                                                            <input class="input" type="email" placeholder="e.g. I want to run a marathon" v-model="userGoalEdit">
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
                            </div>

                    </div>
                </div>

                <div class="tile is-8 is-parent">
                    <div class="tile is-child box">
                            
                            <p class="title"><b>Fitness Tracker Feed</b></p>  

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

    #whiteTile {
        background-color: white;
    }
</style>