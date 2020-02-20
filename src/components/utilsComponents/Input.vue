<template>
    <div class="field_input">

    <input title="Заполните это поле"
           class="input"
           v-on="$listeners"
           :placeholder="placeholder"
           v-mask="{mask:mask}"
           :name="name"
           :value="value"
    />
        <span v-if="icon" class="toSpan">
             <svg  class="to" viewBox="0 0 15 23" :style="{height:'23px',width:'15px',color:'#9fb3c3'}">
            <path fill="currentColor" fill-rule="evenodd" d="M11.616 3.07H3v5.774h3.93c4.818 0 8.07 2.541 8.07 7.161 0 3.795-2.229 6.992-8.07 6.992H2.079C.957 22.997 0 22.106 0 21.017V1.88C0 .957.825 0 1.98 0h9.636c.99 0 1.782.792 1.782 1.683 0 .957-.792 1.387-1.782 1.387zM3 19.98h3.93c3.498 0 5.117-2.061 5.117-3.942C12.047 13.464 9.735 12 6.93 12H3v7.98z"></path>
        </svg>
        </span>

    </div>
</template>

<script>
    export default {
        name: "Input",
        props:{
             placeholder:String,
            name:String,
            icon:Boolean,
            mask:String,
            value:String

        },
        // methods:{
        //     customChange:function(e){
        //         this.$emit('change',e)
        //     }
        // }
    }
</script>

<style scoped lang="scss">
    .field_input{
        position: relative;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        flex-direction: column;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        box-sizing: border-box;
        flex: 0 0 25%;
        -webkit-box-flex: 0;
        max-width:430px;
        &:focus-within{
            .to{
                color:#ed1651 !important
            }
        }

        .toSpan{
            position:absolute;
            left:90%;
            top:30%;

        }


    .input{
    box-sizing: border-box;
        z-index: auto;
        font-weight: 400;
        border: 1px solid #9fb3c3;
        background: #fff;

min-height:50px;
        width:max-content;

        -webkit-transition: .3s all cubic-bezier(.4,0,.6,1);
        transition: .3s all cubic-bezier(.4,0,.6,1);
        -webkit-appearance: none;
        appearance: none;
        color:#9fb3c3;
        resize: none;
        -webkit-box-shadow: none;
        box-shadow: none;
        border-radius: 4px;
        overflow: visible;
        position: relative;
        width: 100%;
        font-style: normal;
        font-variant-ligatures: normal;
        font-variant-caps: normal;
        font-variant-numeric: normal;
        font-variant-east-asian: normal;

        font-stretch: normal;
        font-size: 16px;
        line-height: 22px;
        font-family: "Open Sans", sans-serif;
        padding: 13px 48px 13px 14px;
        outline-color: initial;
        outline-style: initial;
        outline-width: 0px;


        :hover{
            box-shadow: 10px 10px 30px 0 rgba(0,0,0,.11);
        }
    }
    }

</style>