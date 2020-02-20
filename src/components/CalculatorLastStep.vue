<template>
    <div id="container">
    <CalculatorHead/>

            <form id="content">
                <div id="left">
                    <p class="title">Отправитель</p>
                    <Input placeholder="Отделение отправителя" name="place"/>
                    <Input placeholder="ФИО отправителя" name="fio"/>
                    <div class="mini_input_block">
                        <Input mask="+7(999) 999 999 99" placeholder="Телефон отправителя" name="phone"/>
                        <Input  placeholder="email" name="email"/>
                    </div>
                    <div id="password_panel">
                        <p class="title">Паспортные данные отпрвителя</p>
                        <div>
                            <Input placeholder="Серия" name="password_part" mask="XXXX"/>
                            <Input placeholder="Номер" name="password_num" mask="XXXXXX"/>
                        </div>
                    </div>
                    <Checkbox label="Даю своё согласие на обработку " name="believer" unique="персональных данных"/>
                </div>
                <div id="right">
                    <p class="title">Получатель</p>
                    <Input placeholder="Город,Улица,Строение,кв/офис" name="receiver"/>
                    <Input placeholder="ФИО получателя" name="receiver_fio"/>
                    <div class="mini_input_block">
                        <Input placeholder="Телефон" name="receiver_phone"/>
                        <Input placeholder="Эл.Почта" name="receiver_email"/>
                    </div>

                </div>
                <Button type="submit" text="Отправить"/>

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
        mounted() {
            $("#content").validate({
                rules:{

                    place:{
                        required:true,

                    },
                    city:{
                        required:true
                    },
                    email:{
                      email:true,
                      required:true
                    },
                    fio:{
                        required:true
                    },
                    password_part:{
                        required:true
                    },
                    phone:{
                        required:true
                    },
                    password_num:{
                        required:true
                    },
                    receiver:{
                        required:true
                    },
                    receiver_fio:{
                        required:true
                    },
                    receiver_email:{
                        required:true
                    },
                    receiver_phone:{
                        required:true
                    },
                    believer:{
                        required:true
                    }

                },

            })
        }
    }
</script>

<style scoped lang="scss">
    #container{
        .title{
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
            color:
                    #3f3f3f;
            margin: 0 0 -5px;
        }
        margin: 0 auto;
        position: relative;
        border-radius: 4px;
        width:1060px;
        background: #f2f1ef;
        padding: 50px 50px 170px;
        #content{
            display:grid;
            grid-template-columns: 50% 50%;
            justify-content: space-between;
            box-sizing:border-box;
            #left{
                display:grid;
                grid-row-gap: 20px;
                padding:30px 0;
                box-sizing:border-box;
                #password_panel{
                   div{
                       display:grid;
                       grid-template-columns: 20% 75%;
                       grid-column-gap: 20px;
                   }
                }
            }
            #right{
                display:grid;
                grid-row-gap: 20px;
                box-sizing:border-box;

            }
            .mini_input_block{
                display:grid;
                box-sizing:border-box;
                grid-template-columns: auto auto;
                grid-column-gap:20px;
            }

        }
    }
</style>