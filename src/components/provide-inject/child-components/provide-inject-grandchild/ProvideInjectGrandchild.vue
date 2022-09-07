<template>
  <Box class="red">
    <small v-text="msg" />
  </Box>
</template>

<script>
import { inject } from 'vue'

export default {
  setup() {
    const msg = inject('msg')
    
    return {
      msg
    }
  }
}
</script>
