<template>
    <div id="calculator_head">
        <div id="calculator_title">
            Расчет и отправка посылок <br/>
             для частных клиентов
        </div>
        <div class="calculator_steps">
            <StepPow v-for="(item,index) in pages" :value="item" :key="index"/>
        </div>
    </div>
</template>

<script>
    import StepPow from "./StepPow";
    export default {
        name: "CalculatorHead",
        inject:['activeList'],
        components: {StepPow},
        data(){
            return{
                pages:this.activeList
            }
        }
    }
</script>

<style scoped lang="scss">
    #calculator_head{
        position: relative;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-flow: row nowrap;
        flex-flow: row nowrap;
        -webkit-box-align: start;
        -ms-flex-align: start;
        align-items: flex-start;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        color: #3f3f3f;
        font-style: normal;
        font-variant-ligatures: normal;
        font-variant-caps: normal;
        font-variant-numeric: normal;
        font-variant-east-asian: normal;

        font-stretch: normal;
        font-size: 40px;
        line-height: 44px;
        font-family: "Open Sans", sans-serif;
        margin: 0 0 44px;
        font-weight: bold;
        text-align:start;
        .calculator_title{

            word-break: break-word;
            -webkit-box-flex: 0;
            -ms-flex: 0 0 66.66667%;
            flex: 0 0 66.66667%;
            max-width: 66.66667%;
            opacity: 0;
            visibility: hidden;
            -webkit-transition: .3s all cubic-bezier(.4,0,.6,1);
            transition: .3s all cubic-bezier(.4,0,.6,1);
            position: absolute;
            left: 0;
            right: 0;
        }
        .calculator_steps{
            display:flex;
            justify-content: space-between;

        }
    }
</style>