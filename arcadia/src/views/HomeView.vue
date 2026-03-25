<template>
  <div class="coantiner">
    <div class="page">
      <HomeInfo/>
    </div>
    <div class="page mt-10">
      <ServicesView></ServicesView>
    </div>
    <div class="page">
      <TeamHome></TeamHome>
    </div>
    <div class="page">
      <QuoteSection></QuoteSection>
    </div>
  </div>
</template>

<script setup>
  import HomeInfo from '@/components/HomeInfo.vue';
  import TeamHome from '@/components/TeamHome.vue';
  import QuoteSection from '@/components/QuoteSection.vue';
  import ServicesView from './ServicesView.vue';
</script>

<style>
  template{
    height:100% !important;width:100% !important; margin:0px; padding:0px;
  }

  .container {height: 500% !important; width: 100% !important;}

  .page {height:20% !important; width:100% !important;}

</style>
