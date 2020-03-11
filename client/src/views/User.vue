<template>
  
    <div class="user">
        <!-- user uses 2-way data binding: v-model attaches input binding to data field,
        vue looks at event, see's that it's a model/variable, and updates it, while also 
        outputting to console -->

        <div class="tile is-ancestor notification">
            <div class="tile is-parent">
                <article class="tile is-child box notification is-primary">
                    <p class="title">Welcome New User!</p>
                    <p class="subtitle">Let's get some info so we can start tracking you:</p>
                    
                    <div class="field">
                        <div class="control has-icons-left has-icons-right">
                            <input class="input" type="name" placeholder="Name" v-model="name">
                                <span class="icon is-small is-left">
                                    <i class="fas fa-user"></i>
                                </span>
                        </div>
                            <p class="help">Enter your name</p>
                    </div>

                    <div class="field">
                        <div class="control has-icons-left has-icons-right">
                            <input class="input" type="password" placeholder="Password" v-model="password">
                                <span class="icon is-small is-left">
                                    <i class="fas fa-lock"></i>
                                </span>
                        </div>
                            <p class="help">Enter a password</p>
                    </div>
                    
                    <div class="field">
                        <div class="control has-icons-left has-icons-right">
                            <input class="input" type="email" placeholder="Email" v-model="email">
                                <span class="icon is-small is-left">
                                    <i class="fas fa-envelope"></i>
                                </span>
                        </div>
                            <p class="help">Enter your email</p>
                    </div>

                    <div class="field">
                        <div class="control has-icons-left has-icons-right">
                            <input class="input" type="age" placeholder="Age" v-model="age">
                                <span class="icon is-small is-left">
                                    <i class="fas fa-birthday-cake"></i>
                                </span>
                        </div>
                            <p class="help">Enter your age</p>
                    </div>

                    <div class="field">
                        <div class="control has-icons-left has-icons-right">
                            <input class="input" type="height" placeholder="Height" v-model="height">
                                <span class="icon is-small is-left">
                                    <i class="fas fa-ruler-vertical"></i>
                                </span>
                        </div>
                            <p class="help">Enter your height (in inches)</p>
                    </div>

                    <div class="field">
                        <div class="control has-icons-left has-icons-right">
                            <input class="input" type="weight" placeholder="Weight" v-model="weight">
                                <span class="icon is-small is-left">
                                    <i class="fas fa-weight-hanging"></i>
                                </span>
                        </div>
                            <p class="help">Enter your weight (in pounds)</p>
                    </div>

                </article>
            </div>
                
            <div class="tile is-parent">
                <article class="tile is-child box notification is-info">
                    <p class="title">User Info Look Right?</p>
                    <p class="subtitle">You can change it at any time.</p>
                    <div>Name: <strong>{{ name }}</strong></div>
                    <div>Email: <strong>{{ email }}</strong></div>
                    <div>Age: <strong>{{ age }}</strong></div>
                    <div>Height (in): <strong>{{ height }}</strong></div>
                    <div>Weight (lbs): <strong>{{ weight }}</strong></div>
                    <div>Your BMI = <strong>{{ bmi(height, weight) }}</strong></div>
                </article>
            </div>
                
            <div class="tile is-parent">
                <article class="tile is-child box notification is-warning">
                    <p class="title">Start Tracking!</p>
                    <p class="subtitle">Hit the button to create your profile:</p>
                    <div class="content">
                        <button class="button is-info" v-on:click="success = !success"><strong>Let's go!</strong></button>
                        <p v-show="success"><strong>Whooooooo, profile created successfully!</strong></p>
                    </div>
                </article>
            </div>
        
        </div> <!-- tile is-ancestor closing div -->

    </div> <!-- class="user" closing div -->

</template>

<script>
export default {
    data: () => ({
        name: '',
        email: '',
        age: '',
        height: '',
        weight: '',
        success: false   
    }),
    methods: {
        bmi: function(height, weight) {
            return (weight/(height*height) * 703).toFixed(2);
        }
    }
}
</script>

<style>

    .user {
        padding: 50px 0;
    }

</style>