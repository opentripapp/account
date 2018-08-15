<template>
  <el-main class="container-page">
    <el-card >
      <div slot="header" class="clearfix">

        <h3 style="line-height: 5px;">{{title}}</h3>
      </div>

      <el-form ref="input" :model="input" style="width: 300px" >
        <el-form-item>
          <el-input placeholder="Password" type="password" v-model="input.newPassword"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input placeholder="Confirm Password" type="password" v-model="input.againNewPassword" @keyup.enter.native="doReset"></el-input>
        </el-form-item>
      </el-form>
      <div class="bottom clearfix">
        <el-button style="width: 100%;" type="warning" v-loading.fullscreen.lock="fullscreenLoading" @click="doReset" >Change Password</el-button>
      </div>
    </el-card>
  </el-main>
</template>

<script>
  import axios from 'axios'

  export default{
    data(){
          return {
              title:'Reset Password',
              input:{
                newPassword:'',
                againNewPassword:''
              },
            fullscreenLoading:false
          }
      },
    methods:{
      doReset(){
        if(!this.$route.query.key){
          return this.$message.error('Oops, Unique key not found.');
        }
        if(!this.input.newPassword){
          return  this.$message({
            message: 'Please input your new password',
            type: 'warning'
          });
        }
        if(this.input.newPassword.length < 6){
          return  this.$message({
            message: 'Make sure it consists of at least 6 characters.',
            type: 'warning'
          });
        }
        if(!this.input.againNewPassword){
          return  this.$message({
            message: 'Please confirm your new password',
            type: 'warning'
          });
         }
        if(this.input.newPassword !== this.input.againNewPassword){
          return  this.$message({
            message: 'Your password does not match',
            type: 'warning'
          });
        }

        this.fullscreenLoading = true;
        try{
            let myKey=this.$route.query.key;
            axios.post('https://api.opentripapp.com/user/reset_password',{
            key:myKey,new_password:this.input.againNewPassword
          },{
              headers:{'x-api-key':'jLKpuGMCwTizWDRvdZOExR0Y62A1KPrUEfQbq7YvfLAtiQJji9'}
          }).then((response)=>{
              this.fullscreenLoading = false;
              if(response.data.error){
                return this.$message({
                  message: response.data.message,
                  showClose: true,
                  type: 'error'
                });
              }
              this.$alert('Password changed successfully', 'Succeess', {
                confirmButtonText: 'OK',
                callback: action => {
                  window.location.href = 'https://www.opentripapp.com/';
                }
              });
          }).catch((error)=>{
            this.fullscreenLoading = false;
            this.$message({
              message: error.message,
              showClose: true,
              type: 'error'
            });
          });
        }catch (e){
          this.fullscreenLoading =false;
          this.$message({
            message: e.message,
            showClose: true,
            type: 'error'
          });
        }

      }
    },
    head(){
      return {
        title:'Reset Password | OpenTrip',
        meta: [
          { hid: 'description', name: 'description', content: 'Reset Password Opentrip' }
        ]
      }
    }

  }
</script>

<style>
  .container-page {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    background: url(/bg.svg) center / cover fixed no-repeat;
  }

  .image{
    width: 20%;
    height: 20%;
    border-radius: 50%;
  }

  .my-container{

  }

  .left{
    background: #FFEB3B;
  }
</style>
