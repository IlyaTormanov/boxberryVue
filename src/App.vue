<template>
  <div id="app">
    <Calculator/>
    <FormList/>
  </div>
</template>

<script>


import BoxDropdown from "@/components/BoxDropdown";
import Calculator from "@/components/Calculator";
import FormList from "@/components/FormList";
export default {
  name: 'App',
  components: {
    FormList,
    Calculator,
    BoxDropdown

  }
}
</script>

<style>
  *{
    margin:0;
    padding:0;

  }
  p{
    margin:0;
    padding:0;
  }
  body{
    margin:0 auto;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
