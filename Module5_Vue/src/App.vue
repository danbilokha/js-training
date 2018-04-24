<template>
  <div class="body-content">
    <div class='header'>
      <img src='./assets/logo.png'>
    </div>
    <div class='content'>
      <router-view/>
    </div>
    <div class='footer'>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
  };
</script>

<style scoped>
  .header {
    text-align: center;
  }
  .content {
    margin: 0 20%;
  }
  .footer {
  }
</style>
