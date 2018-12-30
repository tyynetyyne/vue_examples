<template>
  <div class="about">
    <div v-if="theirName != undefined">
      <h1>Hello {{ theirName }}, this is an about page</h1>
    </div>
    <div v-else>
      <h1>This is an about page</h1>
    </div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali...</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      theirName: this.$route.params.name
    };
  }
};
</script>
