<template>
    <div class="field-checkbox">
        <input class="field-checkbox__input" type="checkbox" name="list_services" id="000001327" value="foo"  :checked="checked" v-on="$listeners">
        <label class="field-checkbox__label" for="000001327"> Голосовое оповещение получателя о поступлении посылки&nbsp;<span>+25₽</span></label>
    </div>
</template>

<script>
    export default {
        name: "Checkbox",
        props:{
            checked:Boolean
        }
    }
</script>

<style scoped lang="scss">
    .field-checkbox__input{
        opacity: 0;
        visibility: hidden;
        box-sizing: border-box;
        padding: 0;
        box-shadow: none;
        border-radius: 0;
        outline: 0;
        resize: none;
        -webkit-appearance: none;
        overflow: visible;
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
    }
    .field-checkbox__label{
        position: relative;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        padding-left: 30px;
        cursor: pointer;
        text-align: left;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        font-style: normal;
        font-variant-ligatures: normal;
        font-variant-caps: normal;
        font-variant-numeric: normal;
        font-variant-east-asian: normal;
        font-weight: 400;
        font-stretch: normal;
        font-size: 14px;
        line-height: 23px;
        font-family: "Open Sans", sans-serif;
        span{
            color: #ed1651;
            padding: 0;
            margin: 0;
            -webkit-margin-before: 0;
            -webkit-margin-after: 0;
            cursor: pointer;
            text-align: left;
        }
        ::before{
            border-color: #a6ce39;
            border-radius: 3px;
            left: 0;
            background: #fff;
            position: absolute;
            display: block;
            content: "";
            -webkit-transition: .3s all cubic-bezier(.4,0,.6,1);
            transition: .3s all cubic-bezier(.4,0,.6,1);
            top: 50%;
            -webkit-transform: translate(0,-50%);
            transform: translate(0,-50%);
            -webkit-box-shadow: inset 3px 3px 0 0 #e7eaef;
            box-shadow: inset 3px 3px 0 0 #e7eaef;
            width: 20px;
            height: 20px;
        }
        ::after{
            opacity: 1;
            visibility: visible;
            left: 6px;
            width: 10px;
            height: 10px;
            background-image: url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 1L4.55 9 1 5.181' stroke='%23A6CE39' stroke-width='2' fill='none' fill-rule='evenodd' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
            position: absolute;
            display: block;
            content: "";
            -webkit-transition: .3s all cubic-bezier(.4,0,.6,1);
            transition: .3s all cubic-bezier(.4,0,.6,1);
            top: 50%;
            -webkit-transform: translate(0,-50%);
            transform: translate(0,-50%);
        }
    }
</style>