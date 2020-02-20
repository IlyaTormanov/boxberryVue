<template>
        <div id="calculator">

            <BoxDropdown v-if="onShow"/>
            <CalculatorHead />
            <div class="calculator__item-content">
                <div>

                <Input placeholder="Город отправитель"  @input="cityValue" @focus="focus=true" @blur="focus=false" :icon="true" />
                <PopUpInput :cityList="currentFrom" v-if="currentFrom.length&&focus" />
                </div>
                    <Input placeholder="Город получатель"  :icon="true"/>
                        <Input placeholder="Выберите упаковку"  :icon="true" @click="onShow=!onShow"/>
                            <Input placeholder="Оценочная стоимость" :icon="true"/>
            </div>
            <div class="calculator-options calculator-options_service">
                <p>Дополнительные услуги</p>
                <div>
                    <Checkbox label="Голосовое оповещение отправителя о выдаче посылки" unique="+25₽"/>
                    <Checkbox label="Голосовое оповещение получателя о поступлении посылки" unique="+25₽"/>
                </div>
            </div>
            <div class="calculator_nav">
                <div class="calculator_nav_inner">
                    <a class="calculator__link" href="/e-commerce/#calculator" >
                        <svg class="calc" viewBox="0 0 20 24">
                            <path fill="currentColor" d="M7.5 14a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM3.846 2c-.917 0-1.142.043-1.368.164a.727.727 0 0 0-.314.314c-.12.226-.164.45-.164 1.368v16.308c0 .917.043 1.142.164 1.368.075.14.174.239.314.314.226.12.45.164 1.368.164h12.308c.917 0 1.142-.043 1.368-.164a.727.727 0 0 0 .314-.314c.12-.226.164-.45.164-1.368V3.846c0-.917-.043-1.142-.164-1.368a.727.727 0 0 0-.314-.314c-.226-.12-.45-.164-1.368-.164H3.846zm0-2h12.308c1.337 0 1.822.14 2.311.4.49.262.873.646 1.134 1.135.262.489.401.974.401 2.31v16.31c0 1.336-.14 1.821-.4 2.31a2.726 2.726 0 0 1-1.135 1.134c-.489.262-.974.401-2.31.401H3.844c-1.336 0-1.821-.14-2.31-.4A2.726 2.726 0 0 1 .4 22.464C.139 21.976 0 21.491 0 20.155V3.844c0-1.336.14-1.821.4-2.31A2.726 2.726 0 0 1 1.536.4C2.024.139 2.509 0 3.845 0zM7.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM6 6a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2H6z"></path>
                        </svg>
                    Расчёт для&nbsp;интернет-магазинов</a>
                    <Button text="Расчитать" />
                </div>
            </div>
        </div>

</template>

<script>
    import StepPow from "@/components/utilsComponents/StepPow";
    import Input from "@/components/utilsComponents/Input";
    import Checkbox from "@/components/utilsComponents/Checkbox";
    import Button from "@/components/utilsComponents/Button";
    import BoxDropdown from "@/components/BoxDropdown";
    import PopUpInput from "@/components/utilsComponents/PopUpInput";
    import CalculatorHead from "./utilsComponents/CalculatorHead";

    export default {
        name: "Calculator",
        components: {CalculatorHead, PopUpInput, BoxDropdown, Button, Checkbox, Input, StepPow},
        provide(){
            return{
                activeList:[1,2,3]
            }
        },
        data(){
            return{

                focus:false,
                currentFrom:[],
                currentTo:[],
                isDisabled:'disabled',
                onShow:false,
                fromData:["Москва","Мосырь","Санкт-Петербург","Сочи","Краснодар"],
                toData:["Москва","Санкт-Петербург","Сочи","Краснодар"],

            }
        },

      methods:{

            setShow:function(){
                this.onShow=!this.onShow
            },
          cityValue:function(e){
              console.log(e , "3213123")
              this.currentFrom = this.fromData.filter(item=>item.toUpperCase().substring(0,3)===e.target.value.toUpperCase()) || this.currentFrom
          }

      }
    }
</script>

<style scoped lang="scss">
    #calculator{
        margin: 0 auto;
        position: relative;
        border-radius: 4px;
        width:1160px;
        background: #f2f1ef;
        padding: 50px 50px 170px;


        .calculator__item-content{
            display: flex;
        }
        .calculator-options{
            display:flex;
            flex-direction: column;
            align-items:flex-start;
            font-style: normal;
            font-variant-ligatures: normal;
            font-variant-caps: normal;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-weight: 600;
            font-stretch: normal;
            font-size: 18px;
            line-height: 26px;
            font-family: "Open Sans", sans-serif;
            word-break: break-word;
            color: #3f3f3f;
            margin-top:50px;
            padding: 0 0 68px;
        }
        .calculator_nav{
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            height:135px;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;

            left: 0;
            right: 0;

            border-top: 1px solid #dedede;


            -webkit-transition: .3s all cubic-bezier(.4,0,.6,1);
            transition: .3s all cubic-bezier(.4,0,.6,1);
            margin: 0;
            text-indent: 0;
            list-style: none;
            list-style-position: outside;

            -webkit-box-flex: 0;
            -ms-flex: 0 0 100%;
            flex: 0 0 100%;
            padding: 10px 0 0;
            .calculator_nav_inner{
                display:flex;
                width:100%;
                justify-content: space-between;
                .calculator__link{
                    font-style: normal;
                    font-variant-ligatures: normal;
                    font-variant-caps: normal;
                    font-variant-numeric: normal;
                    font-variant-east-asian: normal;
                    font-weight: 400;
                    font-stretch: normal;
                    font-size: 16px;
                    line-height: 22px;
                    font-family: "Open Sans", sans-serif;
                    color: #3681c7;
                    cursor: pointer;
                    -webkit-transition: .3s all cubic-bezier(.4,0,.6,1);
                    transition: .3s all cubic-bezier(.4,0,.6,1);
                    display: -ms-inline-flexbox;
                    display: inline-flex;
                    -webkit-box-align: center;
                    -ms-flex-align: center;
                    text-decoration: none;
                    align-items: center;
                    .calc{
                        color:#3681c7;
                        height:24px;
                        padding-right:10px;
                    }
                }
            }
        }
    }
</style>