<template>
  <!-- needs to be in one root element -->
  <div id="app">
    
    <div id="myheader">
      <MyHeader></MyHeader>
    </div>
      
    <div id="nav">
      <MyNav></MyNav>
      </div>
    
    <router-view/>
    
    <div id="myfooter">
      <MyFooter></MyFooter>
    </div>
  
  </div>

</template>

<script>
import MyNav from '@/components/Nav.vue';
import MyFooter from '@/components/Footer.vue';
import MyHeader from '@/components/Header.vue';

export default {
  components: {
    MyNav,
    MyFooter,
    MyHeader
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>