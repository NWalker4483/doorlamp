<template>
  <div id="app">
    <headbar></headbar>
  <div class="content">
    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <router-view></router-view>
  </div>

  <footer class="footer">
        <hr />
      <hr />
      <p>Enter your email to recive post notifications</p>
      <button type="submit">submit</button>
      <input type="text" name="email" id="email" />
  </footer>


  
  </div>
</template>

<script>
import headbar from "./components/headbar.vue";

export default {
  name: "App",
  components: {
    headbar
  },
};
</script>

<style>
body {
  font-family: "Courier New", Courier, monospace;
  background-color: rgb(17, 17, 17);
  padding: 30px;
  color: white;
  text-align: center;
}

html, body {
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.content {
  flex: 1 0 auto;
  /* Prevent Chrome, Opera, and Safari from letting these items shrink to smaller than their content's default minimum size. */
  padding: 20px;
}

.footer {
  flex-shrink: 0;
  /* Prevent Chrome, Opera, and Safari from letting these items shrink to smaller than their content's default minimum size. */
  padding: 20px;
}

* {
  box-sizing: border-box;
}

div.article {
  margin-left: 10%;
  margin-right: 10%;
  font-family: "Courier New", Courier, monospace;
  color: white;
  padding: 30px;
  font-size: large;
}

</style>
