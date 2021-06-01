<template>
  <div>
    <headbar msg="Welcome to Your Vue.js App" />

    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <router-view></router-view>
    <footer>
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
    headbar,
  },
};
</script>

<style>

#box-1 {
  background-color: white;
  padding: 20px;
}
.sec-header {
  color: white;
}
body {
  font-family: "Courier New", Courier, monospace;
  background-color: rgb(17, 17, 17);
  padding: 30px;
  color: white;
  text-align: center;
}
button {
  padding: 15px 20px;
  border: none;
  background-color: white;
  font-family: "Courier New", Courier, monospace;
  font-size: 30px;
  cursor: pointer;
}
button:hover {
  transition: 0.2s;
  padding-bottom: 10px;
  padding-right: 25px;
  padding-left: 25px;
  border-radius: 5px;
}
.sex {
  color: black;
}
</style>
