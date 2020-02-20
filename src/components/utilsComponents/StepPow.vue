<template>
    <div class="step">
        1
    </div>
</template>

<script>
    export default {
        name: "StepPow"
    }
</script>

<style scoped lang="scss">
    .step{

        text-align: center;
        border-radius: 50%;
        height: 60px;
        width: 60px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        font-style: normal;
        font-variant-ligatures: normal;
        font-variant-caps: normal;
        font-variant-numeric: normal;
        font-variant-east-asian: normal;
        font-weight: normal;
        font-stretch: normal;
        font-size: 28px;
        line-height: 28px;
        font-family: "Open Sans", sans-serif;
        justify-content: center;
        background: #fff;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        position: relative;
        z-index: 1;
        cursor: pointer;
        -webkit-box-shadow: 10px 10px 30px 0 transparent;
        box-shadow: 10px 10px 30px 0 transparent;
        -webkit-transition: .3s all cubic-bezier(.4,0,.6,1);
        transition: .3s all cubic-bezier(.4,0,.6,1);
        margin: 0 25px 0 26px;
        :active{
            color: #fff;
            background: #ed1651;
        }
    }
</style>