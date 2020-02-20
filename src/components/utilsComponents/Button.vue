<template>
    <div>
    <button @click="onClick" :disabled="disabled" :style="{background:disabled==='disabled'?'#ee6d8f':'#ED1651'}">{{text}}</button>

    </div>
</template>

<script>
    export default {
        name: "Button",
        props:{
            onClick:Function,
            text:String,
            disabled:String

        }
    }
</script>

<style scoped>
    button {
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