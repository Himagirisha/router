<template>
    <label>Username</label>
  <input type="text" placeholder="Enter your username" v-model="UserName"><br>
  <label>Password</label>
  <input type="password" placeholder="Enter your password" v-model="password"/><br>
  <button @click="toFetchProducts">SUBMIT</button>
  <div id="log" @click="goToSignup" ><u>Dont have an account? signup here</u></div>
  <br><h1>UserDetails</h1>
  <p>userName:{{UserName}}</p>
  <p>password:{{password}}</p>
</template>

<script>
export default {
    data(){
        return{
            UserName:"",
            password:""
        }
    },
    methods:{
       goToSignup(){
        this.$router.push("/signup")
       },
       toFetchProducts(){
        this.$router.push("/fetchproducts")
       }
    }

}
</script>

<style>
   #log{
    cursor: pointer;
   }
</style>