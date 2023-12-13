<script>
import Header from '../src/components/header/AppHeader.vue';
import AppMain from '../src/components/main/AppMain.vue';

export default {
  components: {
    Header,
    AppMain

  }
};

</script>

<template>
  <Header />
  <AppMain />
</template>

<style lang="scss">
@use '../src/assets/styles/style.scss'
</style>
