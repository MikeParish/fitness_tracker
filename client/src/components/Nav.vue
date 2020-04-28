<template>
    
    <nav role="navigation" aria-label="main navigation" class="navbar">
        
        <div class="navbar-brand">

            <div class="navbar-item">
				<i class="fas fa-weight"></i>
			</div>
		    
            <a v-bind:class="{ 'is-active':isOpen }" @click="isOpen = !isOpen" role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>

        </div>

        <div v-bind:class="{ 'is-active':isOpen }" id="navbarBasicExample" class="navbar-menu">
            
            <div class="navbar-start">    
                <router-link to="/" class="navbar-item">FitnessTracker</router-link>
                <router-link to="/admin" class="navbar-item">Admin</router-link>
                <router-link to="/dashboard" class="navbar-item">Dashboard</router-link>
                <router-link to="/myprofile" class="navbar-item">My Profile</router-link>
                <router-link to="/tools" class="navbar-item">Tools</router-link>
            </div>

            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <a class="button is-primary" href="http://localhost:8080/user"><strong>Sign up</strong></a>
                        <a class="button is-light" href="http://localhost:8080">Log in</a>
                    </div>
                </div>
            </div>
        
        </div>
    
    </nav>

</template>

<script>
export default {
    data:() => ({
        isOpen: false
    })
}
</script>

<style>

</style>