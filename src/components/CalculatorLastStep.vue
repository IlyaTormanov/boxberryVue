<template>
    <div id="container">
        <CalculatorHead/>

        <form id="content">
            <div id="left">
                <p class="title">Отправитель</p>
                <p class="title">Получатель</p>
                <Input placeholder="Отделение отправителя" name="place"/>
                <Input placeholder="Отделение получателя " name="place_receiver"/>
                <Input placeholder="ФИО отправителя" name="receiver"/>
                <Input placeholder="ФИО получателя" name="receiver_fio"/>



                <div class="double_blocks">
                    <Input mask="+7(999) 999 999 99" placeholder="Телефон отправителя" name="phone_receiver"/>
                    <Input placeholder="email" name="email"/>
                </div>
                <div class="double_blocks">
                    <Input placeholder="Телефон получателя" name="receiver_phone"/>
                    <Input placeholder="Эл.Почта" name="receiver_email"/>
                </div>


            </div>
            <div id="password_panel">
                <p class="title">Паспортные данные отправителя</p>
                <div class="password_data">
                    <Input placeholder="Серия" name="password_part" mask="####"/>
                    <Input placeholder="Номер" name="password_num" mask="######"/>
                </div>
            </div>
            <div class="submitBar"><Checkbox label="Даю своё согласие на обработку "
                           :name="personalDataChecked.name"
                           v-model="personalDataChecked.value"
                           :value="personalDataChecked.value"
                           :id="personalDataChecked.name"

                           unique="персональных данных"/>

                <Button type="submit" text="Отправить" :on-click="()=>{}"/></div>

        </form>

    </div>
</template>

<script>
    import CalculatorHead from "./utilsComponents/CalculatorHead";
    import $ from 'jquery';
    import validate from 'jquery-validation'
    import Input from "./utilsComponents/Input";
    import Button from "./utilsComponents/Button";
    import Checkbox from "./utilsComponents/Checkbox";

    export default {
        name: "CalculatorLastStep",
        components: {Checkbox, Button, Input, CalculatorHead},
        data(){
            return{
                personalDataChecked:{
                    name:"believer",
                    value:false
                }
            }
        },
        mounted() {
            $("#content").validate({
                rules: {

                    place: {
                        required: true,

                    },
                    city: {
                        required: true
                    },
                    email: {
                        email: true,
                        required: true
                    },
                    phone_receiver:{
                        required:true,
                        minLength:12,
                    },
                    place_receiver: {
                        required: true
                    },
                    password_part: {
                        required: true,
                        minLength:4
                    },
                    phone: {
                        required: true,
                        minLength:12,
                    },
                    password_num: {
                        required: true,
                        minLength:6
                    },
                    receiver: {
                        required: true
                    },
                    receiver_fio: {
                        required: true
                    },
                    receiver_email: {
                        required: true,
                        email:true
                    },
                    receiver_phone: {
                        required: true,
                        minLength:12,
                    },
                    believer: {
                        required: true
                    }

                },

            })
        }
    }
</script>

<style scoped lang="scss">
    #container {
        .title {
            font-style: normal;
            font-variant-caps: normal;
            font-weight: 600;
            font-stretch: normal;
            font-size: 18px;
            line-height: 26px;
            font-family: Open Sans, sans-serif;
            font-size-adjust: none;
            font-kerning: auto;
            font-optical-sizing: auto;
            font-variant-alternates: normal;
            font-variant-east-asian: normal;
            font-variant-ligatures: normal;
            font-variant-numeric: normal;
            font-variant-position: normal;
            font-language-override: normal;
            font-feature-settings: normal;
            font-variation-settings: normal;
            word-break: break-word;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            color: #3f3f3f;
            margin: 0 0 -5px;
        }

        margin: 0 auto;
        position: relative;
        border-radius: 4px;
        width: 1060px;
        background: #f2f1ef;
        padding: 50px 50px 170px;

        #content {


            /*grid-template-columns: 50% 50%;*/
            /*justify-content: space-between;*/
            box-sizing: border-box;
            .submitBar{
                display:flex;
                justify-content: space-between;
                width:100% !important;
                align-items:center;
            }
            #password_panel {
                .password_data {
                    display: grid;
                    grid-template-columns: 35% 55%;
                    grid-column-gap: 20px;
                    padding-top: 20px;
                    width:455px
                }
            }
            #left {
                .double_blocks {
                    display: flex;
                    justify-content: space-between;
                    width: 430px;

                    div {
                        width: 200px !important;
                    }
                }

                grid-template-columns: auto auto;
                display: grid;
                grid-row-gap: 15px;
                grid-template-areas: "item item" "item item" "item item" "item item";
                padding: 30px 0;
                box-sizing: border-box;




            }

            #right {
                display: grid;
                grid-row-gap: 20px;
                box-sizing: border-box;

            }

            .mini_input_block {
                display: grid;
                box-sizing: border-box;
                grid-template-columns: auto auto;
                grid-column-gap: 20px;
            }

        }
    }
</style>