<template>
    <label>First name</label>
  <input type="text" placeholder="enter firtsname"><br>
  <label>Last name</label>
  <input type="text" placeholder="enter lastname"><br>
  <label>Password</label>
  <input type="password" placeholder="Enter your password" /><br>
  <label>Confirm Password</label>
  <input type="password" placeholder="Confirm  password" /><br>
  <button>SUBMIT</button>
  <div @click="goToLogin" ><u>Already have an account?click here</u></div>
</template>

<script>
export default {
    methods:{
       goToLogin(){
        this.$router.push("/login")
       }
    }
}
</script>

<style>

</style>