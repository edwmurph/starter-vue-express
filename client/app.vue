<template>
  <div id="app">
    response from server:
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
    this.serverResponse = await this.$fetch( '/api/hello' );
  }

};
</script>
