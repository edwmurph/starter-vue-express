<template>
  <div id="app">
    updated response from server:
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
    this.delayedResponse();
  },

  methods: {
    delayedResponse() {
      setTimeout( () => this.serverResponse = 'changed', 2000 );
    }
  }

};
</script>
