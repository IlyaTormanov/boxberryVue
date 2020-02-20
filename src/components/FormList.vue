<template>
    <div id="container_fromList">
    <form id="travel">
        <Input v-for="item in dataList" :placeholder="item.placeholder" :name="item.name"/>
        <Checkbox v-for="item in checkboxBusiness"
                  v-model="check"
                  :value="check"
                  :name="item.name"
                  :id="item.name"
                  :label="item.value" />

        <Button type="submit" text="Отправить" background="#a6ce39" full-width="true"/>
    </form>
        <div id="stepBlock">
            <StepPow value="1" label="Введите корректный email" inherit="true"/>
            <StepPow value="2" label="Заполните необходимые поля" inherit="true"/>
            <StepPow value="3" label="Оставьте нам свой номер телефона" inherit="true"/>
            <StepPow value="4" label="И мы Вам перезвоним!" inherit="true"/>
        </div>
    </div>
</template>

<script>
    import Input from "@/components/utilsComponents/Input";
    import Checkbox from "@/components/utilsComponents/Checkbox";
    import Button from "./utilsComponents/Button";
    import $ from 'jquery';
    import validate from 'jquery-validation'
    import StepPow from "./utilsComponents/StepPow";

    export default {
        name: "FormList",
        components: {StepPow, Button, Checkbox, Input},

        data() {
            return {

                check: [],
                checkboxBusiness: [
                    {
                        name: "Voice",
                        value: "Согласие на отслеживание сообщений"
                    },
                    {
                        name: "Message",
                        value: 'Согласие на отслеживание звонков'
                    }
                ],
                dataList: [
                    {
                        placeholder: "Юридическое лицо*",
                        value: "",
                        name: "business"
                    },
                    {
                        placeholder: "Ваш номер телефона*",
                        value: "",
                        name: "phone"
                    },
                    {
                        placeholder: "Адрес вашего сайта*",
                        value: "",
                        name: "address"
                    },
                    {
                        placeholder: "ФИО*",
                        value: "",
                        name: "fio"
                    },
                    {
                        placeholder: "Адрес электронной почты*",
                        value: "",
                        name: "email"
                    },
                    {
                        placeholder: "Ваш город*",
                        value: "",
                        name: "city"
                    },

                ]
            }
        },

        mounted() {
            $("#travel").validate({
                rules: {

                    email: {
                        required: true,
                        email: true
                    },
                    city: {
                        required: true
                    },
                    fio: {
                        required: true
                    },
                    address: {
                        required: true
                    },
                    phone: {
                        required: true
                    },
                    business: {
                        required: true
                    },
                    Voice: {
                        required: true
                    },
                    Message: {
                        required: true
                    }

                },
                messages: {
                    Voice: {}
                }
            })
        }
    }
</script>

<style scoped lang="scss">
    #container_fromList {
        margin: 0 auto;
        position: relative;
        border-radius: 4px;
        width: 1060px;
        background: #f2f1ef;
        padding: 50px 50px 170px;
            display:flex;
        #travel {

            display:grid;
            grid-row-gap:20px;
        }
        #stepBlock{
            display:grid;
           height:400px;
            margin-left:150px;
        }
    }

</style>