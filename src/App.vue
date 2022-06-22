<template>
  <div id="app">
   <Navigation></Navigation>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'

export default {
  name: 'App',
  components: {
    Navigation
  }
}
</script>

<style>
#app{
  width: 100%;
  margin: 0;
  padding: 0;
  font: 12px/1.5 Microsoft YaHei,Heiti SC,tahoma,arial,Hiragino Sans GB,"\5B8B\4F53",sans-serif;
  -webkit-font-smoothing: antialiased;
  background-color: #fff;
}
</style>
