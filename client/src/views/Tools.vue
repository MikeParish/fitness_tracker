<template>
    
    <div class="tools">
        
        <div class="tile is-ancestor">
            
            <div class="tile is-parent">
                <article class="tile is-child box notification is-warning">
                    <p class="title">Target Weight</p>
                    <p class="subtitle">Dial in Your Target Weight</p>
                    <!-- v-on: binding button click to add a lb to tWeight data object, listening for click event -->
                    <!-- v-bind to elements and control the value via the Vue-->
                    <!-- @ is shorthand for v:on -->
                    <button @click="add(1)">Add 1 lb</button>
                    <!-- v-on: binding button click to sub a lb from tWeight data object --> 
                    <button v-on:click="sub(1)">Lose 1 lb</button>
                    <!-- v-on: double click adds 10 lbs, listening for click event -->
                    <!-- @ is shorthand for v:on -->
                    <button @dblclick="add(10)">Add 10 lbs</button>
                    <!-- v-on: double click subs 10 lbs --> 
                    <button v-on:dblclick="sub(10)">Lose 10 lbs</button>  
                    <p>Target Weight is <strong>{{ tWeight }}</strong> lbs</p>
                    <p>(Click for 1, double click for 10)</p>
                </article>
            </div>
            
            <div class="tile is-parent">
                <article class="tile is-child box">
                <p class="title">Foo</p>
                <p class="subtitle">Bar</p>
                </article>
            </div>
            
            <div class="tile is-parent">
                <article class="tile is-child box">
                <p class="title">Third column</p>
                <p class="subtitle">With some content</p>
                <div class="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                </div>
                </article>
            </div>
        
        </div> <!-- tile is-ancestor closing div -->
    
    </div> <!-- class="tools" closing div -->

</template>

<script>
export default {
    data: () => ({
          tWeight: 200,
    }),
    methods: {
        bmi: function(height, weight) {
            return (weight/(height*height) * 703).toFixed(2);
        },
        add: function(inc) {
            this.tWeight += inc;
        },
        sub: function(dec) {
            this.tWeight -= dec;
        },
    }
}
</script>

<style>

</style>