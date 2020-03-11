<template>
    <footer>
        <p>{{ copyright }}</p>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            copyright: 'Copyright 2020 FitnessTracker'
        }
    }

}
</script>

<style scoped>
    footer {
        background: #222;
        padding: 15px;
    }
    p { 
        color: #00d1b2;
        text-align: center;
    }
</style>