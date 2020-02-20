<template>
    <div class="cityPopUp" >
        <span v-for="item in cityList">{{item}}</span>
    </div>
</template>

<script>
    export default {
        name: "PopUpInput",
        props:{
            cityList:Array
        },

    }
</script>

<style scoped lang="scss">
        .cityPopUp{
            border-top:none !important;
            border: 1px solid #9fb3c3;
            background: white;
            display:flex;
            flex-direction: column;
            span{

                padding:5px;
                cursor:pointer;
                &:hover{
                    background:#999;
                }
            }
        }
</style>