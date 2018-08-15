<template>
  <el-main class="container-page" v-loading.fullscreen.lock="fullscreenLoading">
    <el-col>
      <el-row>
        <logo></logo>
      </el-row>
    </el-col>
  </el-main>
</template>

<script>
import Logo from '~/components/Logo.vue'


export default {
  components: {
    Logo
  },
  data(){
    return {
      fullscreenLoading:false
    }
  },
  asyncData(context){
      setTimeout(()=>{
        window.location.href = 'https://www.opentripapp.com/';
      },3000)
      //window.location.href = 'https://www.opentripapp.com/';
  },
  methods:{

  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}z

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.container-page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  background: url(/bg.svg) center / cover fixed no-repeat;
}
</style>
