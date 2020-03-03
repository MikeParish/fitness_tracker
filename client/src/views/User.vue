<template>
  
    <div class="user">
        <!-- user uses 2-way data binding: v-model attaches input binding to data field,
        vue looks at event, see's that it's a model/variable, and updates it, while also 
        outputting to console -->

        <div class="tile is-ancestor">
            <div class="tile is-parent">
                <article class="tile is-child box notification is-success">
                    <p class="title">Welcome New User!</p>
                    <p class="subtitle">Let's get some info so we can start tracking you:</p>
                    
                    <label>Name:</label>
                    <input type="text" v-model="name"/>
                    <div></div>
        
                    <label>Age:</label>
                    <input type="text" v-model="age"/>
                    <div></div>

                    <label>Height (in):</label>
                    <input type="text" v-model="height"/>
                    <div></div>

                    <label>Weight (lbs):</label>
                    <input type="text" v-model="weight"/>
                    <div></div>

                    <label>SSN:</label>
                    <input type="text" v-model="ssn"/>
                    <div></div>

                    <label>Credit Card:</label>
                    <input type="text" v-model="cc"/>
                    <div></div>

                </article>
            </div>
                
            <div class="tile is-parent">
                <article class="tile is-child box notification is-info">
                    <p class="title">User Info Look Right?</p>
                    <p class="subtitle">You can change it at any time.</p>
                    <div>Name: <strong>{{ name }}</strong></div>
                    <div>Age: <strong>{{ age }}</strong></div>
                    <div>Height (in): <strong>{{ height }}</strong></div>
                    <div>Weight (lbs): <strong>{{ weight }}</strong></div>
                    <div>SSN: <strong>{{ ssn }}</strong></div>
                    <div>Credit Card: <strong>{{ cc }}</strong></div>
                    <div>Your BMI = <strong>{{ bmi(height, weight) }}</strong></div>
                </article>
            </div>
                
            <div class="tile is-parent">
                <article class="tile is-child box notification is-warning">
                    <p class="title">Start Tracking!</p>
                    <p class="subtitle">Hit the button to create your profile:</p>
                    <div class="content">
                        <button class="button is-success" v-on:click="success = !success"><strong>Let's go!</strong></button>
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
        age: '',
        height: '',
        weight: '',
        ssn: '',
        cc: '',
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
.is-horizontal-center {
    justify-content: center;
}
</style>