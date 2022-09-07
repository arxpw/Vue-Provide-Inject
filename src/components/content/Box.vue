<template>
  <div class="box">
    <slot />
  </div>
</template>

<style scoped>
  .box {
    margin: 5px;
    border: 4px solid #999;
    border-radius: 8px;
    padding:12px;
    color: #555;
  }
  .red {
    border: 4px solid #c52d25;
    color: #222;
  }
</style>
