<template>
    <div class="choiced_item" @click="onClick">
        <p class="choiced_item_black">{{name}}</p>
        <p class="choiced_item_gray">{{size}}</p>
    </div>
</template>

<script>
    export default {
        name: "IconItem",
        props:{
            name:String,
            size:String,
            onClick:Function
        }
    }
</script>

<style scoped lang="scss">
    .choiced_item{
        box-sizing:border-box;
        cursor:pointer;
        padding:10px;
        width:100%;
        display:flex;
        &:hover{
            background:#F4F4F4;
        }
        .choiced_item_black{
            width:fit-content;
            font-family: Open Sans;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 19px;

            color: #333333
        }
        .choiced_item_gray{
            width:fit-content;
            padding-left:3px;
            font-family: Open Sans;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 19px;

            color:gray;
        }
    }
</style>