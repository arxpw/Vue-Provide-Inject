<template>
  <Container class="flex">
    <PropDrilling msg="Prop Drilling Message" />
    <ProvideInject msg="Injected Message" />
  </Container>
</template>

<script>
import Container from './components/content/Container.vue';

import PropDrilling from './components/prop-drilling/PropDrilling.vue';
import ProvideInject from './components/provide-inject/ProvideInject.vue';

export default {
  name: 'App',
  components: {
    Container,
    PropDrilling,
    ProvideInject
  }
}
</script>

<style>
  .flex {
    display: flex;
  }
  html,body {
    font-family: Arial, Helvetica, sans-serif;
  }
</style>
