<script setup>
import FooterBar from './components/FooterBar.vue';
import NavigationBar from './components/NavigationBar.vue';

</script>

<template class="font-sans">
  <NavigationBar class=""></NavigationBar>
    <div class="main-container content-center w-full">  
      <router-view/>
    </div>  
  <FooterBar></FooterBar>
</template>

<style>
</style>
