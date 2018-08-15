<template>
  <div v-loading.fullscreen.lock="fullscreenLoading" class="container-page">
    <h1>{{message}}</h1>
  </div>
</template>


<script>
  import axios from 'axios'

  export default {
    data(){
      return {
        message:'',
        fullscreenLoading:false
      }
    },
    mounted(){
        this.fullscreenLoading = true;
      let key = this.$route.query.key;
      if(!key){
        this.fullscreenLoading =false;
        return this.$notify({
          title: 'Error',
          message: 'Key not found',
          type: 'error',
          duration:0
        });
      }else{
        try{
          axios.put('https://api.opentripapp.com/user/confirm_email',{
            key:key
          },{
            headers:{'x-api-key':'jLKpuGMCwTizWDRvdZOExR0Y62A1KPrUEfQbq7YvfLAtiQJji9'}
          }).then((response)=>{
            this.fullscreenLoading = false;
            if(response.data.error){
              return this.$notify.error({
                title: 'Error',
                message: response.data.message,
                duration:0
              });

            }
            this.$notify({
              title: 'Success',
              message: 'Email address successfully confirmed',
              type: 'success',
              duration:0
            });
          }).catch((error)=>{
            this.fullscreenLoading = false;
            this.$notify.error({
              title: 'Error',
              message: error.message,
              duration:0
            });
          });
        }catch (e){
          this.fullscreenLoading = false;
          this.$notify.error({
            title: 'Error',
            message: e.message,
            duration:0
          });

        }

      }
    },
    head(){
      return {
        title:'Confirm Email | OpenTrip',
        meta: [
          { hid: 'description', name: 'description', content: 'Confirm Email' }
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
</style>
