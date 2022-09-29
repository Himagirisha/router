<template>
  <h1>Office Component</h1>
  <button @click="goToHome">Go to home</button>
</template>

<script>
export default {
 methods:{
  goToHome(){
      this.$router.push("/")
    }
 }
}
</script>

<style>

</style>