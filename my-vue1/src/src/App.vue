<template>
  <div id="app">
    <router-view class="clearfix"/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
 font-size:0.22rem;

}
.clearfix:after
{
  content:".";
  display:block;
  height:0;
  visibility:hidden;
  clear:both;
}
.clearfix {
  zoom:1;
  display:block;
  clear:both;
}
*{
  margin: 0;           /*  body-8px */
  padding: 0;
  text-decoration-line: none ;
  font-style: normal;
  list-style: none;
  -webkit-tap-highlight-color:rgba(0,0,0,0) ;
  box-sizing: border-box;
}
img{
  width: 25%;
  border: 0;
  display: inline-block;
}
</style>
