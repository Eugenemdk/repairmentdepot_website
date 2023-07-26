<template>
  <div>
    <BootstrapHeader/>
    <router-view></router-view>
  </div>
  <!--<img alt="Vue logo" src="./assets/logo.png">-->
 
  <!--<BootstrapHeader/>-->
  <!--
<BootstrapNavBar/>
  -->
 <!--<BootstrapContent/>-->
</template>

<script>
import BootstrapHeader from './components/BootstrapHeader.vue';
//import BootstrapNavBar from './components/BootstrapNavBar.vue'
//import BootstrapContent from './components/BootstrapContent.vue';
export default {
  name: 'App',
  components: {
    BootstrapHeader,
    //BootstrapNavBar,
   // BootstrapContent
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

</style>
