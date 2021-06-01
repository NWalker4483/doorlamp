<template>
  <header class="main-header">
    <div>
      <h1>Doorlamp</h1>
      <router-link to="/">
        <button type="button">home</button>
      </router-link>
      <router-link to="/about">
        <button type="button">about</button>
      </router-link>
      <router-link to="/gallery">
        <button type="button">gallery</button>
      </router-link>
      <router-link to="/archive">
        <button type="button">archive</button>
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "headbar",
};
</script>

<style scoped>
.main-header {
  font-size: 40px;
  text-align: center;
  font-family: "Courier New", Courier, monospace;
  color: white;
}
</style>

