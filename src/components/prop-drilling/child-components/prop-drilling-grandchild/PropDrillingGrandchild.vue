<template>
  <Box>
    <small v-text="msg" />
  </Box>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      default: null,
    }
  }
}
</script>
