<template>
    <div>
            <p>Найти отделение в {{this.default}}</p>
    </div>
</template>

<script>
    export default {
        name: "CityPopUp",
        data(){
            return{
                default:"Екатеринбург",
                cityList:[
                    "Москва","Мосырь","Санкт-Петербург","Сочи","Краснодар","Ереван","Минск","Екатеринбург"
                ]
            }
        }
    }
</script>

<style scoped>

</style>