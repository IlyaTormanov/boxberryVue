<template>

    <form id="travel">
       <Input v-for="item in dataList" :placeholder="item.placeholder" />
        <Checkbox v-for="check in checkedList" :checked="check.checked" v-model="currentCheck"/>

    </form>

</template>

<script>
    import Input from "@/components/utilsComponents/Input";
    import Checkbox from "@/components/utilsComponents/Checkbox";

    export default {
        name: "FormList",
        components: {Checkbox, Input},
        data(){
            return{
                currentCheck:[],
                checkedList:[
                    {
                        name:"Получение рассылки",
                        checked:false
                    },
                    {
                        name:"Согласие на получение персональных данных",
                        checked:false
                    }
                ],
                dataList:[
                    {
                       placeholder:"Юридическое лицо*",
                        value:"",
                        name:"business"
                    },
                    {
                        placeholder:"Ваш номер телефона*",
                        value:"",
                        name:"phone"
                    },
                    {
                        placeholder:"Адрес вашего сайта*",
                        value:"",
                        name:"address"
                    },
                    {
                        placeholder:"ФИО*",
                        value:"",
                        name:"fio"
                    },
                    {
                        placeholder:"Адрес электронной почты*",
                        value:"",
                        name:"email"
                    },
                    {
                        placeholder:"Ваш город*",
                        value:"",
                        name:"city"
                    },

                ]
            }
        },
        methods:{
                onSend:function(){
                    $("#travel").validate({
                        rules:{
                              name:'email',
                                email:{
                                  required:true,
                                    email:true
                                }
                        }
                    }
                    )
                }
        }
    }
</script>

<style scoped>

</style>