<template>
  <Box class="red">
    <strong>Provide Inject Child</strong>
    <ProvideInjectGrandchild />
  </Box>
</template>

<script>
import ProvideInjectGrandchild from './provide-inject-grandchild/ProvideInjectGrandchild.vue';

export default {
  components: { ProvideInjectGrandchild },
}
</script>
