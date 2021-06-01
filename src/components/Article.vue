<template>
<div>
  <p>
      Article text will be rendered here 
  </p>
</div>
</template>

<script>
export default {
  name: 'article',
  props: ["text"],
  data: function () {
  return {
    article: this.text
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
