<template>
  <Box>
    <strong>Prop Drilling</strong>
    <PropDrillingChild v-bind="{ msg }" />
  </Box>
</template>

<script>
import PropDrillingChild from './child-components/PropDrillingChild.vue';

export default {
  components: { PropDrillingChild },
  props: {
    msg: {
      type: String,
      default: null,
    }
  }
}
</script>
