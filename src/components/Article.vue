<template>
<div>
  <p>
      <vue-markdown>{{markdown}}</vue-markdown>
  </p>
</div>
</template>

<script>
export default {
  name: 'Article',
  props: ["text"],
  data: function () {
  return {
    markdown: this.text
  }
}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
