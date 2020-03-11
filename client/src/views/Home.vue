<template>
  
    <div class="home">
      
        <section class="section">
            <div class="tile is-ancestor notification">
                <div class="tile is-vertical is-parent is-4">
                    
                    <div class="tile is-child box">
                        <section class="section">
                            
                            <i class="fas fa-weight fa-3x"></i>
                            <section class="section">
                            <p class="title">Welcome Back to FitnessTracker</p>
                    
                            <form class="container" @submit.prevent="login">
                                {{error}}
                                <div class="field">
                                    <label class="label">Email</label>
                                    <label class="label">(admin: a@ft.com - 1111)</label>
                                    <label class="label">(user: m@ft.com - 2020)</label>
                                    <div class="control has-icons-left has-icons-right">
                                        <input class="input is-primary" type="email" placeholder="Email" v-model="email">
                                        <span class="icon is-small is-left">
                                        <i class="fas fa-envelope"></i>
                                        </span>
                                    </div>
                                    <p class="help">Enter your email</p>
                                </div>
                            
                                <div class="field">
                                    <label class="label">Password</label>
                                    <div class="control has-icons-left has-icons-right">
                                        <input class="input is-primary" type="password" placeholder="Password" v-model="password">
                                        <span class="icon is-small is-left">
                                        <i class="fas fa-lock"></i>
                                        </span>
                                    </div>
                                    <p class="help">Enter your password</p>
                                </div>

                                <div class="field is-grouped">
                                    <div class="control">
                                        <button class="button is-primary"><strong>Login</strong></button>
                                    </div>
                                    
                                    <div class="control">
                                        <button class="button is-danger is-light">Cancel</button>
                                    </div>
                                </div>
                            </form>
                            </section>
                            
                        </section>
                    </div>
                    
                </div>
                
                    <div class="tile is-4 is-parent">
                        <div class="tile is-child box">
                            <p class="title"><b>Recent Activity</b></p>
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
            </div> <!-- ancestor -->
        </section>

    </div> <!-- class="home" closing div -->

</template>

<script>
import { Login } from "../models/Users";

export default {
    name: 'Home',
    
    components: {
    
    },
    
    data() {
        return {
            email: '',
            password: '',
            error: ''
        }        
    },
  
    methods: {
        
        login() {
            try {
                Login(this.email, this.password);
                if(this.email == 'a@ft.com'){
                    this.$router.push('/admin');
                }
                else {
                    this.$router.push('/dashboard');
                }
            } catch (error) {
                this.error = error;
            }
        }
    }
}
</script>

<style>

</style>