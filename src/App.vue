<template>
  <div id="app">
    <Calculator/>
    <StaticMaket/>
    <CalculatorLastStep/>
    <FormList/>

  </div>
</template>

<script>


import BoxDropdown from "@/components/BoxDropdown";
import Calculator from "@/components/Calculator";
import FormList from "@/components/FormList";
import CalculatorLastStep from "./components/CalculatorLastStep";
import StaticMaket from "@/components/StaticMaket";
import PopUpInput from "@/components/utilsComponents/PopUpInput";
export default {
  name: 'App',
  components: {
    PopUpInput,
    StaticMaket,
    CalculatorLastStep,
    FormList,
    Calculator,
    BoxDropdown

  }
}
</script>

<style>
  .error{
    text-align: start !important;
    width:100% !important;
    padding:10px;
  }

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
  display:grid;
  grid-row-gap:50px;
  justify-content: center;
  align-content:center;
  align-items: center;
}
</style>
