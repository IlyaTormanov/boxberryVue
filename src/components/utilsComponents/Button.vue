<template>
    <div>
    <button @click="onClick"
            :disabled="disabled"
            :type="type"

            :style="{background:disabled==='disabled'?'#ee6d8f':background,width:fullWidth&&'100%'}">{{text}}</button>

    </div>
</template>

<script>
    export default {
        name: "Button",
        props:{
            background:String,
            onClick:Function,
            text:String,
            disabled:String,
            type:String,
            fullWidth:Boolean
        }
    }
</script>

<style scoped>
    button {
        width:175px;
background: #ED1651;
        border-radius: 4px;
        font-family: Open Sans;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        cursor:pointer;
        line-height: 22px;
        /* identical to box height, or 137% */
        border:none !important;;
        padding:15px 20px;
        color: #FFFFFF;
    }
</style>