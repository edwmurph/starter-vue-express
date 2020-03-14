<template>
  <div id="app">
    {{ serverResponse }}
  </div>
</template>

<script>
export default {

  data() {
    return {
      serverResponse: ''
    };
  },

  async created() {
    this.serverResponse = await this.$fetch( '/' );
  }

};
</script>
