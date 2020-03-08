<template>
    
    <nav class="navbar" role="navigation" aria-label="main navigation">
        
        <div class="navbar-brand">

            <div class="navbar-item">
				<i class="fas fa-weight"></i>
			</div>
		    
            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

    <div id="navbarBasicExample" class="navbar-menu">
        
        <div class="navbar-start">
        
        <router-link to="/" class="navbar-item">FitnessTracker</router-link>
        <!-- <router-link to="/about" class="navbar-item">About</router-link> -->
        <!-- <router-link to="/user" class="navbar-item">User</router-link> -->
        <router-link to="/tools" class="navbar-item">Tools</router-link>
        <router-link to="/admin" class="navbar-item">Admin</router-link>

        <!-- More nav dropdown
            <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                More
                </a>

                <div class="navbar-dropdown">
                    <a class="navbar-item">About</a>
                    <a class="navbar-item">Jobs</a>
                    <a class="navbar-item">Contact</a>
                    <hr class="navbar-divider">
                    <a class="navbar-item">Report an issue</a>
                </div>
            </div>-->
        
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

}
</script>

<style>

</style>