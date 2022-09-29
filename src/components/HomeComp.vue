<template>
  <h1>Home Component</h1>
  <!-- <button @click="goToOffice">Go to office</button> -->
  <img src="https://images.unsplash.com/photo-1575517111478-7f6afd0973db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Home img">
</template>

<script>
export default {
  methods:{
    goToOffice(){
      //to programmatically navigate 
      this.$router.push("/office")
    }
  }
}
</script>

<style>

</style>