<template>
  <Box class="red">
    <strong>Provide Inject</strong>
    <ProvideInjectChild />
  </Box>
</template>

<script>
import ProvideInjectChild from './child-components/ProvideInjectChild.vue';
import { provide } from 'vue'

export default {
  components: { ProvideInjectChild },
  props: {
    msg: {
      type: String,
      default: null,
    }
  },
  setup(props) {
    // key and default value, in our case it'll be the msg
    provide('msg', props.msg)
  }
}
</script>
