<template>
  <Box>
    <strong>Prop Drilling Child</strong>
    <PropDrillingGrandChild v-bind="{ msg }" />
  </Box>
</template>

<script>
import PropDrillingGrandChild from './prop-drilling-grandchild/PropDrillingGrandchild.vue';

export default {
  components: { PropDrillingGrandChild },
  props: {
    msg: {
      type: String,
      default: null,
    }
  }
}
</script>
