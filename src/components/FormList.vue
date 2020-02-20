<template>

    <form id="travel" >
       <Input v-for="item in dataList" :placeholder="item.placeholder" :name="item.name" />
        <Checkbox v-for="item in checkboxBusiness" v-model="check" :value="check" :name="item.name" :id="item.name"/>
        <Button type="submit"  text="Отправить"/>
    </form>

</template>

<script>
    import Input from "@/components/utilsComponents/Input";
    import Checkbox from "@/components/utilsComponents/Checkbox";
    import Button from "./utilsComponents/Button";
    import $ from 'jquery';
    import validate from 'jquery-validation'
    export default {
        name: "FormList",
        components: {Button, Checkbox, Input},

        data(){
            return{

               check:[],
                checkboxBusiness:[
                    {
                        name:"Voice",
                        value:"voice"
                    },
                    {
                        name:"Message",
                        value:'message'
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

       mounted() {
           $("#travel").validate({
               rules:{

                   email:{
                       required:true,
                       email:true
                   },
                   city:{
                       required:true
                   },
                   fio:{
                       required:true
                   },
                   address:{
                       required:true
                   },
                   phone:{
                       required:true
                   },
                   business:{
                       required:true
                   },
                   Voice:{
                       required:true
                   },
                   Message:{
                       required:true
                   }

               },
               messages:{
                   Voice:{

                   }
               }
           })
       }
    }
</script>

<style scoped lang="scss">
    #travel{
        width:600px;
    }
</style>