<template>
  
    <div class="home">
      
        <section  class="section notification level-item background-img">
            
                <div class="tile is-vertical is-parent is-4">
                    
                    <div class="tile is-child box">
                        <section class="section">
                            
                            <i class="fas fa-weight fa-3x"></i>
                            <section class="section">
                            <p class="title padder-10-bottom">Welcome Back to FitnessTracker</p>
                            <label class="label">(admin: a@ft.com - 1111)</label>
                            <label class="label padder-10-bottom">(user: m@ft.com - 2020)</label>
                    
                            <form class="container" @submit.prevent="login">
                                {{error}}
                                <div class="field">
                                    <label class="label level-left">Email</label>
                                    
                                    <div class="control has-icons-left has-icons-right">
                                        <input class="input is-primary" type="email" placeholder="Email" v-model="email">
                                        <span class="icon is-small is-left">
                                        <i class="fas fa-envelope"></i>
                                        </span>
                                    </div>
                                    <p class="help padder-10-bottom level-left">Enter your email</p>
                                </div>
                            
                                <div class="field">
                                    <label class="label level-left">Password</label>
                                    <div class="control has-icons-left has-icons-right">
                                        <input class="input is-primary" type="password" placeholder="Password" v-model="password">
                                        <span class="icon is-small is-left">
                                        <i class="fas fa-lock"></i>
                                        </span>
                                    </div>
                                    <p class="help padder-10-bottom level-left">Enter your password</p>
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
        
        async login() {
            try {
                await Login(this.email, this.password);
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
    .background-img { 
    background-image: url(http://cs.newpaltz.edu/~parishm1/pics/ft_bg.jpeg) ;
    background-position: center center;
    background-repeat:  no-repeat;
    background-attachment: fixed;
    background-size:  cover;
    background-color: #999;
 }
    .padder-10-bottom {
        padding-bottom: 10px;
    }
</style>